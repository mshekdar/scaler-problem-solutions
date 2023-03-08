const solve = (A) => {
  let n = A.length
  let i = 0
  let j = 0
  while (n > 1) {
    for (let k = 0; k < n - 1; k++) {
      console.log(A[i][j])
      j++
    }
    for (let k = 0; k < n - 1; k++) {
      console.log(A[i][j])
      i++
    }
    for (let k = 0; k < n - 1; k++) {
      console.log(A[i][j])
      j--
    }
    for (let k = 0; k < n - 1; k++) {
      console.log(A[i][j])
      i--
    }
    i++
    j++
    n -= 2
  }
  if (n === 1) console.log(A[i][j])
}

solve([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
