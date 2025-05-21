const sum = (a: number, b: number): number => {
  return a + b;
};

test('sum 求和', () => {
  // 常规测试
  expect(sum(1, 2)).toBe(3);

  // 边界测试
  expect(sum(0, 0)).toBe(0);
  expect(sum(-1, 5)).toBe(4);
  expect(sum(2.5, 3.5)).toBe(6);
});
