// Pre-order

const test = {
  v: 1,
  l: {
    v: 2,
    l: {
      v: 3,
      l: null,
      r: null,
    },
    r: {
      v: 4,
      l: null,
      r: null,
    },
  },
  r: {
    v: 5,
    l: {
      v: 6,
      l: null,
      r: null,
    },
    r: {
      v: 7,
      l: null,
      r: null,
    },
  },
}
//      1
//  2       5
//3   4   6   7

// preOrder(test)
// postOrder(test)
// inOrder(test)

// VLR
function preOrder(node) {
  if (!node) return
  console.log(node?.v)
  preOrder(node?.l)
  preOrder(node?.r)
}

// LRV
function postOrder(node) {
  if (!node) return
  postOrder(node?.l)
  postOrder(node?.r)
  console.log(node?.v)
}

// LVR
function inOrder(node) {
  if (!node) return
  inOrder(node?.l)
  console.log(node?.v)
  inOrder(node?.r)
}

// console.log(size(test))
function size(node) {
  if (!node) return 0
  return size(node?.l) + size(node?.r) + 1
}

// console.log(sum(test))
function sum(node) {
  if (!node) return 0
  return sum(node?.l) + sum(node?.r) + node?.v
}

console.log(height(test));
function height(node) {
  if(!node) return -1
  return 1 + Math.max(height(node?.l), height(node?.r))
}
