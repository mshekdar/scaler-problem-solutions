// EVALUATE mathematical expression
// Follows PEMDAS
// Parentheses > Exponent > Multiply > Divide > Add > Subtract
console.log(solve('(25^2)+((200-50)/50)+7'))

function solve(expression) {
  const result = calculate(getOperations(expression))
  return result
}

function getOperations(expression) {
  const expressionArr = getExpressionArr(expression)
  
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
          expression: expressionArr.slice(start + 1, index).join(""),
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

  return operations.map((operation) => {
    if (operation.type === 'expression') {
      const operationsPopulated = { ...operation, operations: getOperations(operation.expression) }
      const valuePopulated = {...operationsPopulated, value: calculate(operationsPopulated.operations), type: "number", previousType: "expression" }
      return valuePopulated
    }
    return operation
  })
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
  if(currentElement) {
    expressionArr.push(currentElement)
  }
  return expressionArr
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
  let result = 0;
  let lastOperator = "";
  operations.forEach((operation, index) => {
    if(operation.type === "operator") {
      lastOperator = operation.value
    }
    if(operation.type === "number") {
      result = evaluate(result, +operation.value, lastOperator)
      lastOperator = ""
    }
  })
  return result
}

function evaluate(a, b, operator) {
  switch (operator) {
    case "^":
      return a**b
    case "*":
      return a*b
    case "/":
      return a/b
    case "+":
      return a+b
    case "-":
      return a-b
  
    default:
      return a+b;
  }
}
  
