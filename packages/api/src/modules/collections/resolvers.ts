import { IResolvers } from "graphql-tools";
import { Collection } from "../../entity";

const resolvers: IResolvers = {
  Query: {
    listCollections: async (_, __, { req }) => {
      if (!req.session || !req.session.userId) throw new Error("unauthorized");
      const collections = await Collection.find();
      return collections;
    }
  },
  Mutation: {
    createCollection: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const collection = await Collection.create(params).save();
      return collection;
    }
  }
};

export default resolvers;
