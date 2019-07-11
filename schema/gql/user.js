/*
 * @file: user.js
 * @description: Controllers regarding user services.
 * @date: 20.7.2018
 * @author:sheenam
 * */
import {addUser,getUser} from '../../controllers/user';

export const typeDefs = `
                            type User {
                                _id : String!
                                email : String!
                                firstName : String!
                                lastName: String!
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
        getUser 
    },

    Mutation: {
        addUser
    }

}