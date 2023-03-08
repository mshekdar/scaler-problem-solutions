/** Selection sort */
/** TC: O(N^2), SC: O(1) */

// PROBLEM - Sort a running stream of integers for each int intake.

const resultArr = []
const input = [2, 10, 8, 7, 15, 1, 6]

function fill(sortedArr, intake) {
  const n = sortedArr.length
  let i = n
  for (i = n; i > 0; i--) {
    if (sortedArr[i - 1] > intake) {
      sortedArr[i] = sortedArr[i - 1]
    } else {
      break
    }
  }
  sortedArr[i] = intake
}

// input.forEach((el) => fill(resultArr, el))
// console.log(resultArr)

/** Quick sort */
/** TC: O(N*Log(N)), SC: O(Log(N)) */

console.log(quickSort([4, 3, 2, 1]))

function quickSort(a) {
  if (a.length <= 1) return a
  const { pi, partitionedArr } = partition(a)
  if (partitionedArr.length > 1) {
    const left = quickSort(partitionedArr.slice(0, pi))
    const right = quickSort(partitionedArr.slice(pi))
    return [...left, ...right]
  }
  return partitionedArr
}

function partition(a) {
  let end = a.length - 1
  let pi = 0 // pi: Pivot index
  let pe = a[end] // pe: Pivot element
  for (let j = 0; j < end - 1; j++) {
    if (a[j] < pe) {
      // swap a[j] * a[pi]
      let temp = a[j]
      a[j] = a[pi]
      a[pi] = temp
      pi++
    }
  }
  // swap a[pi] & a[end]
  let temp2 = a[pi]
  a[pi] = a[end]
  a[end] = temp2
  return {
    pi: pi,
    partitionedArr: a,
  }
}
