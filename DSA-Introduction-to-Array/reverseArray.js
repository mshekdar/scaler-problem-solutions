var a = [1, 2, 3, 4, 5, 6, 7, 8]
// reverse(a)
// reverseInARange(a, 2, 4)
rotate(a, 3)
console.log(a)

function reverse(a) {
  const n = a.length
  let i = 0
  let j = n - 1
  while (i < j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp

    i++
    j--
  }
}

function reverseInARange(a, start, end) {
  const n = a.length
  let i = start
  let j = end
  while (i < j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp

    i++
    j--
  }
}

function rotate(a, k) {
  const n = a.length
  reverse(a)
  reverseInARange(a, 0, k - 1)
  reverseInARange(a, k, n - 1)
}
