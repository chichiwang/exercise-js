module.exports = {
  collectCoverage: true,
  coverageDirectory: '__coverage__',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.mjs?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jsdom',
};
