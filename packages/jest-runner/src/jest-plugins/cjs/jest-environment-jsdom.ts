import { loadJestEnvironment } from './import-jest-environment.js';
import { mixinJestEnvironment } from './mixin-jest-environment.js';

const JestEnvironmentImpl = loadJestEnvironment('jest-environment-jsdom');
export = mixinJestEnvironment(JestEnvironmentImpl);
