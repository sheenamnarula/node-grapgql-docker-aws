import { makeExecutableSchema } from 'graphql-tools';
import { mergeModules } from 'graphql-schema-modules';
import * as _ from 'lodash';
import * as user from './gql/user' ;
import * as response from './gql/response'
// const { typeDefs, resolvers } = mergeModules([ user,response]);
console.log(user,"after merge ==>")
const typeDefs =  _.merge(user.typeDefs, response.typeDefs);
const resolvers = _.merge(user.resolvers, response.resolvers)
console.log(typeDefs.toString())
const schema = makeExecutableSchema({ typeDefs: typeDefs.toString(), resolvers });

export default schema;
