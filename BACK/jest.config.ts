export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testPathIgnorePatterns : [
    'globalConfig',
    "/node_modules/",
    "<rootDir>/src/sharred/",
    "<rootDir>/src/modules/*/model/*.ts",
    "<rootDir>/src/modules/*/validators/*.ts",
    "<rootDir>/src/modules/*/mocks/*.ts",
  ],
  preset: '@shelf/jest-mongodb',
};
