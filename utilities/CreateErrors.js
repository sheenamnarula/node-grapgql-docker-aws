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

import { createError } from 'apollo-errors';

export const InvalidFields = createError('InvalidFields', {
  message: 'Please enter all fields in a valid format'
});

export const UnknownError = createError('InvalidFields', {
  message: 'UnknownError'
});
export const AlreadyRegistered = createError('AlreadyRegistered', {
  message: 'Already exists',
});

export const VerificationIssue = createError('VerificationIssue', {
  message: 'Not verified'
});

export const InvalidCredentials = createError('InvalidCredentials', {
  message: 'Invalid Credentials'
});

export const validationErrors = createError('ValidationErrors', {
  message: 'Validation Errors'
});

export const AuthenticationError = createError('AuthenticationError', {
  message: 'Authentication Error'
});
export const StripeError = createError('StripeError', {
  message: 'Stripe error has been occured'
});

export const CustomSuccessResponse = function(obj) {
  let result = {};
  result.success = true;
  result.message = obj.message;
  result.statusCode = 200;

  return result;
};

export const ErrorResponse = function(obj) {
  let result = {};
  result.success = false;
  result.message = obj.message;
  result.statusCode = 400;

  return result;
};
