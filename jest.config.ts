import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/src/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
	setupFilesAfterEnv: ['./src/setupTests.ts'],
};

export default config;
