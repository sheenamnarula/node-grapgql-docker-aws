/*
 * @file: universal.js
 * @description: Universal methods
 * @date: 20.7.2018
 * @author:sheenam
 * */

import md5 from 'md5';
import jwt from 'jsonwebtoken';
import config from '../config';

export const getTimeStamp = () => {
  return Date.now();
};

export const encryptpassword = request => md5(request);

export const generateRandom = (length = 32, alphanumeric = true) => {
  let data = '',
    keys = '';

  if (alphanumeric) {
    keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  } else {
    keys = '0123456789';
  }

  for (let i = 0; i < length; i++) {
    data += keys.charAt(Math.floor(Math.random() * keys.length));
  }

  return data;
};

export const generateToken = data =>
  jwt.sign(data, config.jwtKey, { algorithm: config.jwtAlgo, expiresIn: '90d' });

export const decodeToken = token => jwt.verify(token, config.jwtKey);