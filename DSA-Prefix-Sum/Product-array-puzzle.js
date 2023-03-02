// Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

// Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.

// Input 1:
//     A = [1, 2, 3, 4, 5]
// Output 1:
//     [120, 60, 40, 30, 24]

const solve = (A) => {
    const n = A.length
    const prefixLeft = [A[0]]
    for (let i = 1; i < n; i++) {
        prefixLeft[i] = prefixLeft[i - 1] * A[i]
    }
    const prefixRight = []
    prefixRight[n - 1] = A[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        prefixRight[i] = prefixRight[i + 1] * A[i]
    }
    const result = []
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(prefixRight[1])
        } else if (i === n - 1) {
            result.push(prefixLeft[i - 1])
        } else {
            result.push(prefixRight[i + 1] * prefixLeft[i - 1])
        }
    }
    return result
}

console.log(solve([1, 2, 3, 4, 5]))
