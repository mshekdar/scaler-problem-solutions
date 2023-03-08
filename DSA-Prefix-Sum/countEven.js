// Problem Description
// You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to find the count of even numbers in the range A[B[i][0]…B[i][1]].

// Problem Constraints
// 1 <= N <= 105
// 1 <= Q <= 105
// 1 <= A[i] <= 109
// 0 <= B[i][0] <= B[i][1] < N

// Input Format
// First argument A is an array of integers.
// Second argument B is a 2D array of integers.

// Output Format
// Return an array of integers.

// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [   [0,2]
//         [1,4]   ]
// Input 2:
// A = [2, 1, 8, 3, 9]
// B = [   [0,3]
//         [2,4]   ]

// Example Output
// Output 1:
// [1, 2]
// Output 2:
// [2, 1]

function countEven(A, B) {
  const n = A.length
  const isEven = []
  const countEven = []
  const result = []
  for (let i = 0; i < n; i++) {
    isEven.push(Number(A[i]) % 2 === 0 ? 1 : 0)
  }
  countEven[0] = isEven[0]
  for (let i = 1; i < n; i++) {
    countEven[i] = countEven[i - 1] + isEven[i]
  }
  for (let i = 0; i < B.length; i++) {
    const [l, r] = B[i]
    if (l === 0) {
      result.push(countEven[r])
    } else result.push(countEven[r] - countEven[l - 1])
  }
  return result
}

A = [1, 2, 3, 4, 5]
B = [
  [0, 2],
  [1, 4],
]

console.log(countEven(A, B))
