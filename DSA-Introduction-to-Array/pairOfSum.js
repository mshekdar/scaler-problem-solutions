// Return number of pairs of (i,j) from array A of numbers where i + j = sum

function solve(A, sum) {
  let count = 0
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if ((A[i] + A[j]) === sum) count++
    }
  }
  return count
}

console.log(solve([3, 5, 2, 1, -3, 7, 8, 15, 6, 13], 10))
