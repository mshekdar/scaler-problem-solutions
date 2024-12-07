/** P1 : Sum of all elements in a sub-matrix  */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(solveP1(arr, [0, 0], [1, 2]))

function solveP1(arr, start, end) {
  const [si, sj] = start
  const [ei, ej] = end
  let sum = 0
  for (let i = si; i <= ei; i++) {
    for (let j = sj; j <= ej; j++) {
      sum += arr[i][j]
    }
  }``
  return sum
}

/** P2 : Sum of multiple sub-matrix */

/** Perquisite Concept */
/** Prefix sum for 2D Matrix */
// 

 