const solve = (A, B, C) => {
  let result = [];
  for (let i = 0; i < B; i++) {
    result.push([]);
  }
  let ni = C;
  let nj = B;
  let mainPointer = 0;
  let i = 0;
  let j = 0;
  while (ni > 1 && nj > 1) {
    for (let k = 0; k < ni - 1; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      j++;
    }
    for (let k = 0; k < nj - 1; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      i++;
    }
    for (let k = 0; k < ni - 1; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      j--;
    }
    for (let k = 0; k < nj - 1; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      i--;
    }
    i++;
    j++;
    ni -= 2;
    nj -= 2;
  }
  // if (n === 1) result[i][j] = A[mainPointer];
  if (nj === 1) {
    for (let k = 0; k < ni; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      j++;
    }
    ni -= 2;
    nj -= 2;
  }

  if (ni === 1) {
    for (let k = 0; k < nj; k++) {
      result[i][j] = A[mainPointer];
      mainPointer++;
      i++;
    }
    ni -= 2;
    nj -= 2;
  }

  return result;
};

// console.log(solve([1, 2, 3, 4, 5, 6], 2, 3));
console.log(solve([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 1, 10));
