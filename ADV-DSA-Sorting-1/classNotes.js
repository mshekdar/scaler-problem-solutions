// console.log(findMax([1, 3, 5, 6]))
function findMax(a) {
  let result = a[0]
  for (const el of a) {
    if (el > result) result = el
  }
  return result
}

/** Selection Sort  */
/** Find max and move it to the end */
// TC: O(N^2), SC: O(1)
// const a = [4, 3, 1, 2, 2]
// console.log(selectionSort(a))
// console.log(a)

function selectionSort(a) {
  n = a.length
  for (let i = n - 1; i >= 0; i--) {
    let maxI = 0
    for (let j = 0; j <= i; j++) {
      if (a[j] > a[maxI]) {
        maxI = j
      }
    }
    // Swap
    let temp = a[i]
    a[i] = a[maxI]
    a[maxI] = temp
  }
}

/** Bubble sort */

/** Merge sort */
/** Divide & Conquor */

// PROBLEM - Merge two sorted arrays
// console.log(mergeTwoSorted([1, 2], [3, 4, 5]))

function mergeTwoSorted(b, c) {
  const n = b.length
  const m = c.length
  const a = new Array(m + n).fill(0)

  let i = 0 // i tracks b
  let j = 0 // j tracks c

  for (let k = 0; k <= m + n - 1; k++) {
    if (i === n) {
      a[k] = c[j]
      j++
    } else if (j === m) {
      a[k] === b[i]
      i++
    } else if (b[i] <= c[j]) {
      a[k] = b[i]
      i++
    } else {
      a[k] = c[j]
      j++
    }
  }

  return a
}

function mergeSort2(a, start, mid, end) {
  const leftArray = a.slice(start, mid)
  const rightArray = a.slice(mid)
  return mergeTwoSorted(leftArray, rightArray)
}

function mergeSort(a, start, end) {
  // Divide
  if (start === end) return [a[start]]
  const mid = Math.floor((start + end) / 2)
  const arr1 = mergeSort(a, start, mid)
  const arr2 = mergeSort(a, mid + 1, end)
  // conquor
  return mergeSort2([...arr1, ...arr2], start, mid, end)
}
// const a = [4, 2, 3, 1, 5]
// mergeSort(a, 0, 4)
console.log(mergeSort([1, 3, 2], 0, 2))
