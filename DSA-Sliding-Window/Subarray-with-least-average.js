// Given an array of size N, find the subarray of size K with the least average.
// Output Format
// Return the index of the first element of the subarray of size k that has least average.
// Array indexing starts from 0.

// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3
// Output 1:
// 3

const solve = (A, B) => {
  const n = A.length
  let sum = 0
  for (let i = 0; i < B; i++) {
    sum += A[i]
  }
  let leastSum = sum
  let ans = 0
  let s = 1
  let e = B
  while (e < n) {
    sum = sum + A[e] - A[s - 1]
    if (sum < leastSum) {
      leastSum = sum
      ans = s
    }
    s++
    e++
  }
  return ans
}

console.log(solve([3, 7, 90, 20, 10, 50, 40], 3))
