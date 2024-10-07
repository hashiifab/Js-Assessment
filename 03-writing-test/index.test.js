import { sum } from './index.js'; 
import { strict as assert } from 'node:assert'; 
import test from 'node:test'; 


test('sum() should return the sum of two numbers', () => {
  assert.equal(sum(1, 2), 3); 
  assert.equal(sum(-1, -1), -2); 
  assert.equal(sum(0, 0), 0); 
});
