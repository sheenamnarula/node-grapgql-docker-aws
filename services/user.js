/*
 * @file: user.js
 * @description: Services regarding users.
 * @date: 20.7.2018
 * @author:sheenam
 * */
import User from "../collections/User";

export const addUserService = async payload => {
  try {
    if (await User.checkEmail(payload.email)) {
      return { emailAlreadyexists: true };
    } else {
      let userAdded = await User.register(payload);

      if (userAdded) {
        return userAdded;
      } else {
        return { emailAlreadyexists: true };
      }
    }
  } catch (e) {
    console.log("error ==>", e);
  }
};
