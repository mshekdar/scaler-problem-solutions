const solve = (A) => {
  const n = A.length;
  const result = [];
  const prefixProduct = [A[0]];
  for (let i = 1; i < n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * A[i];
  }
  return result;
};

console.log(solve([1, 2, 3, 4]))