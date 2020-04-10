module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper:{
   "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  }
};