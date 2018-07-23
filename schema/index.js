import { makeExecutableSchema } from 'graphql-tools';
import { mergeModules } from 'graphql-schema-modules';

import * as user from './gql/user' ;
import * as response from './gql/response'
const { typeDefs, resolvers } = mergeModules([ user,response]);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
