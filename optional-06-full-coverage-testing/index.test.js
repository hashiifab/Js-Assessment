import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum() harus mengembalikan jumlah dari dua angka positif', () => {
  const hasil = sum(3, 4);
  assert.strictEqual(hasil, 7);
});

test('sum() harus mengembalikan 0 jika salah satu argumen bukan angka', () => {
  assert.strictEqual(sum(3, '4'), 0);
  assert.strictEqual(sum('3', 4), 0);
  assert.strictEqual(sum('3', '4'), 0);
});

test('sum() harus mengembalikan 0 jika salah satu argumen negatif', () => {
  assert.strictEqual(sum(-3, 4), 0);
  assert.strictEqual(sum(3, -4), 0);
  assert.strictEqual(sum(-3, -4), 0);
});

test('sum() harus mengembalikan 0 jika kedua argumen bukan angka', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum([], {}), 0);
});

test('sum() harus mengembalikan 0 jika kedua argumen adalah nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});
