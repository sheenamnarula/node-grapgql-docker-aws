/*
 * @file: server.js
 * @description: Server configuration.
 * @date: 20.7.2018
 * @author:sheenam
 * */
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/index';
import configureDatabase from './db';
import { formatError } from 'apollo-errors';
import {authContext} from './utilities/auth';
const server = express();

server.use('/graphql', graphqlHTTP(async (request) => (
  {
  schema: schema,

  formatError,
  context : await authContext(request.headers.userid ,request.headers.token ), // authentication to pass in every route
  graphiql: true
})));
configureDatabase();
server.listen(3007);
console.log('Running a GraphQL API server at localhost:3007/graphql');