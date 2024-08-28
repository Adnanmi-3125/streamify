// import type { Config } from 'jest';

// const config: Config = {
//   testEnvironment: 'jest-environment-jsdom',
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   transform: {
//     '^.+\\.(ts|tsx)?$': 'ts-jest',
//   },
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// };

// export default config;

import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;


