const restApiPath = '/api/v1';

export default {
  signInPath: () => [restApiPath, 'login'].join('/'),
  dataPath: () => [restApiPath, 'data'].join('/'),
  signUpPath: () => [restApiPath, 'signup'].join('/'),
};
