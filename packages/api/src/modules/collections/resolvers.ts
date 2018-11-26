import { IResolvers } from "graphql-tools";
import { Collection } from "../../entity";

const resolvers: IResolvers = {
  Mutation: {
    createCollection: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const collection = await Collection.create(params).save();
      return collection;
    },
    updateCollection: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      let collection = await Collection.findOne(params.id);
      if (!collection) throw new Error("not found");
      collection.name = params.name;
      await collection.save();
      return true;
    },
    deleteCollection: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      let collection = await Collection.findOne(params.id);
      if (!collection) throw new Error("not found");
      await collection.remove();
      return true;
    }
  }
};

export default resolvers;
