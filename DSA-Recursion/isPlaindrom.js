const check = (strArray, s, e) => {
  if (s >= e) return true
  if (strArray[s] === strArray[e]) {
    return check(strArray, s + 1, e - 1)
  }
  return false
}

const isPalindrom = (str) => {
  const strArray = str.split('')
  return check(strArray, 0, strArray.length - 1)
}

console.log(isPalindrom('MADAM'))
