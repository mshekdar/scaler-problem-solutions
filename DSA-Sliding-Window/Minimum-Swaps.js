// Given an array of integers A and an integer B,
// find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.
// Note: It is possible to swap any two elements, not necessarily consecutive.

// Input 1:
//  A = [1, 12, 10, 3, 14, 10, 5]
//  B = 8
//  Output 1:
//  2

const solve = (A, B) => {
    const n = A.length
    const windowSize = A.filter((el) => el <= B).length
    let countBad = 0
    for (let i = 0; i < windowSize; i++) {
        if (A[i] > B) countBad++
    }
    let noOfSwaps = countBad
    let s = 1
    let e = windowSize
    while (e < n) {
        if (A[s - 1] > B) countBad--
        if (A[e] > B) countBad++
        noOfSwaps = Math.min(countBad, noOfSwaps)
        s++
        e++
    }
    return noOfSwaps
}

console.log(solve([1, 12, 10, 3, 14, 10, 5], 8))
