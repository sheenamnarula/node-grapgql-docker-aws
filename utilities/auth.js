import * as Universal from "../utilities/universal";
import config from "../config";
import jwt from "jsonwebtoken";
import User from "../collections/User";

const jwtKey = config.jwtKey;
export const authContext = async request => {
  const token = request.headers["authorization"];
  let decoded = {};
  try {
    decoded = jwt.verify(token, jwtKey);
  } catch (err) {
    return { isAuthenticated: false, message: "Token has been expired." };
  }
  const data = await User.checkToken(token);
  if (data) {
    if (!data.isActive) {
      return {
        isAuthenticated: false,
        message: "Your account has been suspended."
      };
    }
    let userId = data._id.toString();
    return {
      isAuthenticated: true,
      credentials: { userId, token },
      message: "Token has been verified."
    };
  } else return { isAuthenticated: false, message: "Token has been expired." };
};
