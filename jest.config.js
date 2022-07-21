/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 30000,

  moduleDirectories: [ 'node_modules' ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths,
      {
        prefix: '<rootDir>',
      }
    ),
  }
}
