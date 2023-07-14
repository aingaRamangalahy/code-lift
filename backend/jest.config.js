const { resolve } = require('path');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/__tests__/*.test.ts'],
    moduleNameMapper: {
      '^@config/(.*)$': resolve(__dirname, 'src/config/$1'),
      '^@api/(.*)$': resolve(__dirname, 'src/api/$1'),
      '^@core/(.*)$': resolve(__dirname, 'src/core/$1'),
      // Add more path aliases if needed
    },

    // setupFiles: ['./setupTests.ts'],
  
}