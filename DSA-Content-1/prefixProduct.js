const solve = (A) => {
  const n = A.length;
  const result = [];
  const prefixProduct = [A[0]];
  for (let i = 1; i < n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * A[i];
  }
  for (let i = 0; i < n; i++) {
    let product;
    if (i === 0) {
      product =
        (prefixProduct[n - 1] % (Math.pow(10, 9) + 7)) / prefixProduct[i];
    } else {
      product =
        ((prefixProduct[n - 1] / prefixProduct[i]) * prefixProduct[i - 1]) %
        (Math.pow(10, 9) + 7);
    }
    result.push(product);
  }
  for (let i = 0; i < n; i++) {
    let product;
    if (i === 0) {
      product =
        (prefixProduct[n - 1] % (Math.pow(10, 9) + 7)) / prefixProduct[i];
    } else {
      product =
        ((prefixProduct[n - 1] / prefixProduct[i]) * prefixProduct[i - 1]) %
        (Math.pow(10, 9) + 7);
    }
    result.push(product);
  }
  return result;
};

console.log(solve([1, 2, 3, 4]))
