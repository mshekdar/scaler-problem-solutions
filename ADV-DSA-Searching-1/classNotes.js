/** Binary search */
// TC: O(logN), SC: O(1)

// Given sorted array; return index of target element; return -1 if not present
// console.log(binarySearch([1, 2, 4, 5, 6, 8], 8))

function binarySearch(a, target) {
  const n = a.length
  let l = 0
  let r = n - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (a[mid] === target) return mid
    if (a[mid] < target) {
      l = mid + 1
    }
    if (a[mid] > target) {
      r = mid - 1
    }
  }

  return -1
}

// Given sorted array; return first occurance index of target element; return -1 if not present
// console.log(binarySearchFirstOccurance([1,2,3,3,3,3,4,5], 1));
function binarySearchFirstOccurance(a, target) {
  const n = a.length
  let l = 0
  let r = n - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (a[mid] === target && (mid === 0 || a[mid - 1] !== target)) return mid
    if (a[mid] < target) {
      l = mid + 1
    }
    if (a[mid] > target) {
      r = mid - 1
    }
  }

  return -1
}

// Given sorted array; return last occurance index of target element; return -1 if not present
// console.log(binarySearchFirstOccurance([1, 2, 3, 3, 3, 3, 4, 5], 3))
function binarySearchFirstOccurance(a, target) {
  const n = a.length
  let l = 0
  let r = n - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (a[mid] === target && (mid === n - 1 || a[mid + 1] !== target))
      return mid
    if (a[mid] <= target) {
      l = mid + 1
    }
    if (a[mid] > target) {
      r = mid - 1
    }
  }

  return -1
}

// Given sorted array where every element appears 2 times except 1; find the unique element
console.log(binarySearchFindUnique([1, 1, 2, 4, 5, 5]))
function binarySearchFindUnique(a) {
  const n = a.length
  let l = 0
  let r = n - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (
      (mid === n - 1 || a[mid] !== a[mid + 1]) &&
      (mid === 0 || a[mid] !== a[mid - 1])
    ) {
      return a[mid]
    }
    if (mid !== 0 || a[mid] === a[mid - 1]) {
      if (a % 2 === 0) r = mid - 2
      if (a % 2 !== 0) l = mid + 1
    } else {
      if (mid % 2 === 0) l = mid + 1
      if (mid % 2 !== 0) r = mid - 1
    }
  }

  return -1
}
