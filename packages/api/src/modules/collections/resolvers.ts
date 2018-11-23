import { IResolvers } from "graphql-tools";
import { Collection } from "../../entity";

const resolvers: IResolvers = {
  Mutation: {
    createCollection: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const collection = await Collection.create(params).save();
      return collection;
    }
  }
};

export default resolvers;
