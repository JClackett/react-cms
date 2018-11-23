import { IResolvers } from "graphql-tools";
import { SiteProperty } from "../../entity";

const resolvers: IResolvers = {
  Query: {
    getSiteProperties: async (_, __, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const siteProperties = await SiteProperty.find();
      return siteProperties;
    }
  },
  Mutation: {
    createSiteProperty: async (_, params, { req }) => {
      if (!req.session || !req.session.userId) return null;
      const siteProperty = await SiteProperty.create(params).save();
      return siteProperty;
    }
  }
};

export default resolvers;
