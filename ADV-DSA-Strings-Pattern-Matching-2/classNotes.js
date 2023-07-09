// Z Algorithm

// console.log(findZ('xxyaxxyaz', 4))

function findZ(str, k) {
  const a = str.split('')
  let result = 0
  for (let i = k; i < a.length; i++) {
    if (a[i] === a[i - k]) {
      result++
    } else {
      break
    }
  }
  return result
}

function findZ2(str, k) {
  const a = str.split('')
  let i = k
  while (i < a.length && a[i] === a[i - k]) {
    i++
  }
  return i - k
}
console.log(findAllZ('xxyaxxyaz'))

function findAllZ(str) {
  const a = str.split('')
  const n = a.length
  let ans = [n]

  for (let i = 1; i < n; i++) {
    if (a[i] === a[0]) {
      ans[i] = findZ2(str, i)
    } else {
      ans[i] = 0
    }
  }
  let j = 1
  while (j < n) {
    if (a[i] === a[0]) {
      ans[i] = findZ2(str, i)
    } else {
      ans[i] = 0
    }
  }

  return ans
}
