import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  verbose: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  transform: {
    '^.+\\.scss$': '<rootDir>/test/cssTransform.js',
    '^.+\\.css$': '<rootDir>/test/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/test/fileTransform.js',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['^.+\\.module\\.(css|sass|scss)'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '!src/other/testUtils.ts',
    '!src/**/*/.d.ts',
    '!src/index.ts',
  ],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  globals: {
    envConfig: {},
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  resetMocks: true,
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
