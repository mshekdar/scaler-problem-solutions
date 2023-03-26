// Preorder

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

preOrder(test)

function preOrder(node) {
  if (node == null) return
  console.log(node?.v)
  preOrder(node?.l)
  preOrder(node?.r)
}
