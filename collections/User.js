/*
 * @file: user.js
 * @description: User collection and methods regarding user collections.
 * @date: 20.7.2018
 * @author:sheenam
 * */
import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class UserClass {
  static checkEmail(email) {
    return this.findOne({ email });
  }
  static checkToken(token) {
    return this.findOne({ 'loginToken.token': token });
  }
  static register(payload) {
    return this(payload).save();
  }
  static login(email, password) {
    return this.findOne({
      email,
      password
    });
  }
  static onLoginDone(userId, payload, loginToken) {
    let updateData = {
      $push: { loginToken: { token: loginToken } },
      $set: {
        lastLogin: Date.now(),
        updatedAt: Date.now()
      }
    };

    return this.findByIdAndUpdate(userId, updateData, { new: true });
  }
  static logout(userId, token) {
    let updateData = {
      $set: {
        'device.token': '',
        updatedAt: Date.now()
      },
      $pull: { loginToken: { token } }
    };
    return this.findByIdAndUpdate(userId, updateData);
  }
}

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' }, // business, user, admin
  verified: {
    token: { type: String, default: '' },
    status: { type: Boolean, default: false }
  },
  loginToken: [
    {
      token: { type: String, default: '' },
      when: { type: Number, default: Date.now() }
    }
  ],
  lastLogin: { type: Number },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

UserSchema.loadClass(UserClass);

export default Mongoose.model('User', UserSchema);
