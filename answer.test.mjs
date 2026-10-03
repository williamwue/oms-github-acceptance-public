import test from 'node:test';
import assert from 'node:assert/strict';
import { answer } from './answer.mjs';
test('synthetic answer stays 42', () => assert.equal(answer, 42));
