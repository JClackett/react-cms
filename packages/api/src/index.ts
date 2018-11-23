import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as session from "express-session";
import * as Redis from "connect-redis";

const RedisStore = Redis(session);

import schema from "./schema";
import morgan = require("morgan");

const redisOptions: any = {
  development: {},
  production: {
    url: process.env.REDIS_URL
  }
};

const env = process.env.NODE_ENV || "development";
const corsUrl =
  env == "production" ? "https://some-url.com" : "http://localhost:3000";

const startServer = async () => {
  try {
    const connection = await createConnection();
    const server = new ApolloServer({
      // These will be defined for both new or existing servers
      ...schema,
      introspection: true,
      context: ({ req, res }: any) => ({ req, res, connection })
    });

    const app = express();

    app.use(morgan("dev")).use(
      session({
        store: new RedisStore(redisOptions[env]),
        secret: "superSecurePass",
        resave: false,
        cookie: {
          maxAge: 432000000
        },
        saveUninitialized: false
      })
    );

    server.applyMiddleware({
      app,
      cors: {
        credentials: true,
        origin: corsUrl
      }
    });

    app.listen({ port: process.env.PORT || 5000 }, () =>
      console.log(`Server ready on port ${process.env.PORT || 5000} 🚀`)
    );
  } catch (error) {
    console.log("Oops! somethings wrong 😢:", error.message);
  }
};

startServer();
