import * as bcrypt from "bcrypt";
import { IResolvers } from "graphql-tools";
import { User } from "../../entity";

const resolvers: IResolvers = {
  Query: {
    me: async (_, __, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const user = await User.findOne(req.session.userId);
      if (!user) throw new Error("not authenticated");
      return user;
    }
  },
  Mutation: {
    register: async (_, { name, password }, { req }) => {
      const existingUser = await User.findOne({ where: { name } });
      if (existingUser) throw new Error("Name already in use");
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, password: hashedPassword }).save();
      req.session.userId = user.id;
      return user;
    },
    login: async (_, { name, password }, { req }) => {
      const user = await User.findOne({ where: { name } });
      if (!user) throw new Error("Invalid name or password");
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid name or password");
      req.session.userId = user.id;
      console.log("whattt");

      return user;
    },
    logout: async (_, __, { req, res }) => {
      await new Promise(res => req.session.destroy(() => res()));
      res.clearCookie("connect.sid");
      return true;
    },
    updateUser: async (_, { name }, { req }) => {
      if (!req.session || !req.session.userId) {
        throw new Error("not authenticated");
      }
      const user = await User.findOne(req.session.userId);
      if (!user) return null;
      if (name != undefined) user.name = name;
      await user.save();
      return user;
    }
  }
};

export default resolvers;
