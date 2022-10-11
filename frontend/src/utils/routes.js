/* eslint-disable no-unused-vars */
const restApiPath = '/api/v1';

const ChatPage = '/';
const loginPage = '/login';
const signup = '/signup';

export default {
  signInPath: () => [restApiPath, 'login'].join('/'),
  dataPath: () => [restApiPath, 'data'].join('/'),
  signUpPath: () => [restApiPath, 'signup'].join('/'),
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  signupPagePath: () => '/signup',
};
