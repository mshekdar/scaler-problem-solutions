// P1.1

console.log(solveP11([0, 0, 0], 1, 2))

function solveP11(arr, start, addition) {
  for (let i = start; i < arr.length; i++) {
    arr[i] = arr[i] + addition
  }
  return arr
}
