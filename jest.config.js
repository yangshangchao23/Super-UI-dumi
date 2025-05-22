const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  // testEnvironment: 'node',
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 使用 jsdom 环境测试 React 组件
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // testMatch: [
  //   // testMatch配置是什么意思？
  //   '<rootDir>/src/**/*.test.ts',
  //   '<rootDir>/src/**/*.test.tsx',
  //   '<rootDir>/src/**/*.test.js',
  //   '<rootDir>/src/**/*.test.jsx',
  // ],
  // testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  // testMatch: ['&zwnj;**/tests/**&zwnj;/*.spec.(js|jsx|ts|tsx)'],
  testMatch: [
    // '<rootDir>/src/**/*.test.(ts|tsx)',
    '<rootDir>/src/**/index.test.tsx', // 更加精确配置
  ],
};
