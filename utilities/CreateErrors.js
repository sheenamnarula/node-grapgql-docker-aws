/*
 * @file: CreateErrors.js
 * @description: Throw errors.
 * @date: 20.7.2018
 * @author:sheenam
 * */
/**
 * Descriptions of Status Codes.
 * 400 - Common errors
 * 401 - Authentication Fails
 */

import { createError } from "apollo-errors";

export const UnknownError = createError("InvalidFields", {
  message: "UnknownError"
});
export const AlreadyRegistered = createError("AlreadyRegistered", {
  message: "Already exists"
});

export const NotFoundError = createError("NotFoundError", {
  message: "NotFound error has been occured"
});

export const CustomSuccessResponse = function(obj) {
  let result = {};
  result.success = true;
  result.message = obj.message;
  result.statusCode = 200;

  return result;
};
