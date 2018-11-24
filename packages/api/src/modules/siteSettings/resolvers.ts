import { IResolvers } from "graphql-tools";
import { SiteSetting } from "../../entity";

const resolvers: IResolvers = {
  Query: {
    getSiteSettings: async (_, __, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const siteSettings = await SiteSetting.find();
      return siteSettings;
    }
  },
  Mutation: {
    createSiteSetting: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const siteSetting = await SiteSetting.create(params).save();
      return siteSetting;
    }
  }
};

export default resolvers;
