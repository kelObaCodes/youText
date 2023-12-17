// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
  };
  