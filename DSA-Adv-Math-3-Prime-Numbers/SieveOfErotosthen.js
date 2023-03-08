// console.log(isPrimeN(200))

/**
 * Find prime numbers till given limit
 * @param {Number} N
 * @returns result array of prime numbers
 */
function isPrimeN(N) {
  const isP = []
  for (let i = 0; i < N; i++) {
    isP.push(true)
  }
  isP[0] = isP[1] = false
  for (let i = 0; i < Math.sqrt(N); i++) {
    if (isP[i]) {
      for (let j = i * i; j <= N; j += i) {
        isP[j] = false
      }
    }
  }
  return isP.map((prime, i) => (prime ? i : 0)).filter((el) => el !== 0)
}

// console.log(countFactors(8));

/**
 * Find count of factors till N
 * @param {number} N Range amx
 * @returns array of numbers
 */
function countFactors(N) {
  const countF = []
  for (let i = 0; i <= N; i++) {
    countF.push(1)
  }
  for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j += i) {
      countF[j] += 1
    }
  }
  return countF
}

// console.log(findSmallestPrimeFactorN(18));

/**
 * Find smallets factor till N
 * @param {number} N
 * @returns array of numbers
 */
function findSmallestPrimeFactorN(N) {
  const smallestF = []
  for (let i = 0; i <= N; i++) {
    smallestF.push(0)
  }
  for (let i = 2; i * i <= N; i++) {
    if (smallestF[i] == 0) {
      smallestF[i] = i
      for (let j = i * i; j <= N; j += i) {
        if (smallestF[j] === 0) {
          smallestF[j] = i
        }
      }
    }
  }
  const result = smallestF.map((el, i) => {
    if (el === 0) {
      return i
    }
    return el
  })
  return result
}
