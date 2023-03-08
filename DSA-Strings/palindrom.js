// PROBLEM - Check if given substring is subarray
// console.log(isPalindrom("abobc", 1, 4)); // false
// console.log(isPalindrom("amoom", 1, 4)); // true
function isPalindrom(str, s, e) {
  const strArray = str.split('')
  let start = s
  let end = e

  while (start < end) {
    if (strArray[start] !== strArray[end]) {
      return false
    }
    start++
    end--
  }

  return true
}

// PROBLEM - Calculate length of largest palindrom in a given string
console.log(findLargetsPalindrom('abacab')) // 5
function findLargetsPalindrom(str) {
  // TC:O(N^3), SC:O(1)
  const strArray = str.split('')
  const n = strArray.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPalindrom(str, i, j)) {
        ans = Math.max(j - i + 1, ans)
      }
    }
  }

  return ans
}
