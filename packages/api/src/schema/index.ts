import * as path from "path";
import { gql } from "apollo-server-express";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const resolversArray = fileLoader(path.join(__dirname, "../modules/**/*.ts"));
const typesArray = fileLoader(path.join(__dirname, "../modules/**/*.graphql"));

export default {
	typeDefs: gql(mergeTypes(typesArray, { all: true })),
	resolvers: mergeResolvers(resolversArray),
};
