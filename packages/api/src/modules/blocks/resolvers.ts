import { IResolvers } from "graphql-tools";
import { Block } from "../../entity";

const resolvers: IResolvers = {
  Mutation: {
    createBlock: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const block = await Block.create(params).save();
      return block;
    },
    updateBlock: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      let block = await Block.findOne(params.id, params);
      if (!block) throw new Error("not found");
      block.content = params.content;
      await block.save();
      return true;
    }
  }
};

export default resolvers;
