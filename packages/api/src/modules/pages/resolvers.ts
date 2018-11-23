import { IResolvers } from "graphql-tools";
import { Page } from "../../entity";

const resolvers: IResolvers = {
  Query: {
    listPages: async (_, __, { req }) => {
      if (!req.session || !req.session.userId) throw new Error("unauthorized");
      const pages = await Page.find({ relations: ["collections"] });
      return pages;
    },
    findPage: async (_, { id }, { req, connection }) => {
      if (!req.session || !req.session.userId) throw new Error("unauthorized");
      const page = await connection
        .getRepository(Page)
        .findOne(id, { relations: ["collections", "collections.blocks"] });
      if (!page) throw new Error("not found");
      return page;
    }
  },
  Mutation: {
    createPage: async (_, { name, slug }, { req }) => {
      if (!req.session || !req.session.userId) throw new Error("unauthorized");
      const page = await Page.create({ name, slug }).save();
      return page;
    }
  }
};

export default resolvers;
