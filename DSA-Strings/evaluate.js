// EVALUATE mathematical expression
// Follows PEMDAS
// Parentheses > Exponent > Multiply > Divide > Add > Subtract
console.log(solve('((1+2*3)*(4-5))'))

function solve(expression) {
  const result = getOperations(expression)
  return result
}

function getOperations(expression) {
  let expressionArr = expression.split('')
  if (!isValid(expressionArr)) {
    return 'Invalid expression'
  }

  let operations = []
  let start = -1
  let brackets = 0

  expressionArr.forEach((element, index) => {
    if (element === '(') {
      start = start === -1 ? index : start
      brackets++
    }

    if (element === ')') {
      brackets--
      if (start != -1 && brackets === 0) {
        operations.push({
          type: 'expression',
          value: expression.slice(start + 1, index),
        })
        start = -1
        return
      }
    }

    if (['^', '*', '/', '+', '-'].includes(element) && start === -1) {
      operations.push({ type: 'operator', value: element })
      return
    }

    if (start === -1) {
      operations.push({ type: 'number', value: element })
    }
  })

  return operations.map((el) => {
    if (el.type === 'expression') {
      return { ...el, operations: getOperations(el.value) }
    }
    return el
  })
}

function isValid(expressionArr) {
  let validator = 0
  let valid = true
  expressionArr.forEach((element) => {
    if (element === '(') validator++
    if (element === ')') validator--
    if (validator < 0) return (valid = false)
  })
  if (validator !== 0) return false
  return valid
}
