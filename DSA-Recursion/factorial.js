const findFactorial = (A) => {
  const factorial = (n) => {
    if (n === 0) return 1
    return n * factorial(n - 1)
  }
  return factorial(A)
}

console.log(findFactorial(4))
