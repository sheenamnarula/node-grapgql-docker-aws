/*
 * @file: user.js
 * @description: Controllers regarding user services.
 * @date: 20.7.2018
 * @author:sheenam
 * */
import {addUser} from '../../controllers/user';
export const typeDefs = `
                            type User {
                                _id : String!
                                email : String!
                                fullName : String!
                            }
                            type Query {
                                getUser(userId : String!) : User
                            }
                            type Mutation {
                                addUser(email : String! , fullName : String!
                                    password : String! ) : User
                            }
                        `;
export const resolvers = {
    Query: {
        getUser(root, payload, context) {   
            console.log(context, "context?****");
            return {
                _id: "abc",
                email: "sheenam",
                firstName: "sheenam",
                lastName: "narula"
            }
            //   if (context.auth.isAuthenticated) return context.auth.credentials.user;
            //   throw new Error(context.auth.message);
        }
    },
    Mutation: {
        addUser : addUser 
    }

}