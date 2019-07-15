/*
 * @file: user.js
 * @description: Controllers regarding user services.
 * @date: 20.7.2018
 * @author:sheenam
 * */

import { addUserService } from "../services/user";
import { AlreadyRegistered } from "../utilities/CreateErrors";

export const addUser = async (root, payload, context) => {
  try {
    let result = await addUserService(payload);
    if (result.emailAlreadyexists) {
      throw new AlreadyRegistered({
        data: {
          reason: "This email has been already registered.",
          statusCode: 400,
          email: payload.email
        }
      });
    }
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getUser = async (root, payload, context) => {
  return {
    _id: "abc",
    email: "sheenam@gmail.com",
    firstName: "sheenam",
    lastName: "narula"
  };
};
