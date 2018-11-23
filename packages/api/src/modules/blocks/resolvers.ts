import { IResolvers } from "graphql-tools";
import { Block } from "../../entity";

const resolvers: IResolvers = {
  Mutation: {
    createBlock: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const block = await Block.create(params).save();
      return block;
    }
  }
};

export default resolvers;
