import ngPreset from 'jest-preset-angular/presets/index.js';

globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: 'tsconfig-esm-ts-jest.spec.json',
};

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
const jestConfig = {
  ...ngPreset.defaultsESM,
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    rxjs: '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-esm.ts'],
  transform: {
    '^.+\\.(ts|js|html|svg)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig-esm-ts-jest.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!tslib)']
};

console.log(jestConfig)

export default jestConfig;
