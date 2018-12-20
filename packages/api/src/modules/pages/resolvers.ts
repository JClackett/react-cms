import { IResolvers } from "graphql-tools";
import { Page } from "../../entity";

const resolvers: IResolvers = {
	Query: {
		pages: async (_, __, { req }) => {
			if (!req.session || !req.session.userId) throw new Error("unauthorized");
			const pages = await Page.find({
				relations: ["collections", "collections.blocks"],
			});
			return pages;
		},
		page: async (_, { id }, { req }) => {
			if (!req.session || !req.session.userId) throw new Error("unauthorized");
			const page = await Page.findOne({
				where: { id },
				relations: ["collections", "collections.blocks"],
			});
			if (!page) throw new Error("not found");
			return page;
		},
	},
	Mutation: {
		createPage: async (_, { name, slug }, { req }) => {
			if (!req.session || !req.session.userId) throw new Error("unauthorized");
			const page = await Page.create({ name, slug }).save();
			return page;
		},
		updatePage: async (_, params, { req }) => {
			if (!req.session || !req.session.userId) return null;
			let page = await Page.findOne(params.id);
			if (!page) throw new Error("not found");
			page.name = params.name;
			await page.save();
			return true;
		},
	},
};

export default resolvers;
