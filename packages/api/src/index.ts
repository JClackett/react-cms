import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
// import { buildSchema } from "type-graphql";
import * as express from "express";
import * as session from "express-session";
import * as Redis from "connect-redis";
import * as morgan from "morgan";

const RedisStore = Redis(session);

import schema from "./schema";

const redisOptions: any = {
	development: {},
	production: {
		url: process.env.REDIS_URL,
	},
};

const env = process.env.NODE_ENV || "development";
const corsUrl =
	env == "production"
		? "https://some-url.com"
		: ["http://localhost:3000", "http://localhost:3001"];

const startServer = async () => {
	try {
		await createConnection();
		const server = new ApolloServer({
			...schema,
			context: ({ req, res }: any) => ({ req, res }),
		});

		// const server = new ApolloServer({
		// 	schema: await buildSchema({
		// 		resolvers: [__dirname + "/modules/**/resolver.*"],
		// 	}),
		// 	context: ({ req }: any) => ({
		// 		req,
		// 	}),
		// });

		const app = express();

		app.use(morgan("dev")).use(
			session({
				store: new RedisStore(redisOptions[env]),
				secret: "superSecurePass",
				resave: false,
				cookie: {
					maxAge: 432000000,
				},
				saveUninitialized: false,
			}),
		);

		server.applyMiddleware({
			app,
			cors: {
				credentials: true,
				origin: corsUrl,
			},
		});

		app.listen({ port: process.env.PORT || 5000 }, () =>
			console.log(`Server ready on port ${process.env.PORT || 5000} 🚀`),
		);
	} catch (error) {
		console.log("Oops! somethings wrong 😢:", error.message);
	}
};

startServer();
