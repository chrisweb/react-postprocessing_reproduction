export const preset = 'ts-jest'
export const testEnvironment = 'jsdom'
export const transform = {
  '^.+\\.tsx?$': 'ts-jest',
}
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
export const testPathIgnorePatterns = ['/node_modules/', '/dist/']
export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts']

// probably do something similar to what fiber uses:
// https://github.com/pmndrs/react-three-fiber/blob/master/jest.config.js
//
// also found this piece which looks interesting:
// @react-three/test-renderer
// https://www.npmjs.com/package/@react-three/test-renderer