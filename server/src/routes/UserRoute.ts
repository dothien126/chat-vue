import express from 'express';
import {
  findOneUser,
  updateUser,
  removeUser,
  findAllUsers,
  saveUser,
  findNotFriends,
  loginUser,
  findFriends,
  findActiveUser,
  blockUserHandle,
  notFoundWhenBlockedHandle,
  unBlockUserHandle,
  upAvatarHandle,
} from '../controlllers/UserController';
import { upload } from '../utils/myFunction';

export const userRoute = function (app: express.Application) {
  app.route('/api/user/find-one').post(findOneUser);
  app.route('/api/user/update').post(updateUser);
  app.route('/api/user/delete').post(removeUser);
  app.route('/api/user/find-all').post(findAllUsers);
  app.route('/api/user/save').post(saveUser);
  app.route('/api/user/find-not-friends').post(findNotFriends);
  app.route('/api/user/find-friends').post(findFriends);
  app.route('/api/user/find-active-user').post(findActiveUser);
  app.route('/api/user/login').post(loginUser);
  app.route('/api/user/block-user').post(blockUserHandle);
  app.route('/api/user/un-block-user').post(unBlockUserHandle);
  app.route('/api/user/not-found-when-blocked').post(notFoundWhenBlockedHandle);
  app.route('/api/user/up-avatar').post(upload, upAvatarHandle);
};
