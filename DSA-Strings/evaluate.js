// EVALUATE mathematical expression
// Follows PEMDAS
// Parentheses > Exponent > Multiply > Divide > Add > Subtract
console.log(solve('((12+23*3)*(422-5))'))

function solve(expression) {
  const result = getOperations(expression)
  return result
}

function getExpressionArr(expression) {
  const input = expression.split("")
  const expressionArr = []
  let currentElement = "";
  input.forEach(el => {
    if(['^', '*', '/', '+', '-', "(", ")"].includes(el)) {
      if(currentElement) { 
        expressionArr.push(currentElement)
        currentElement = "";
      }
      expressionArr.push(el);
      return
    }
    currentElement = currentElement + el;
  })
  return expressionArr
}

function getOperations(expression) {
  // let expressionArr = expression.split('')
  let expressionArr = getExpressionArr(expression)
  if (!validateBrackets(expressionArr)) {
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
          value: expressionArr.slice(start + 1, index).join(""),
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

function validateBrackets(expressionArr) {
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

function calculate(operations) {

}
