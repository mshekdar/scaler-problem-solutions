// Given an array A of length N. Also given are integers B and C.
// Return 1 if there exists a subarray with length B having sum C and 0 otherwise

// Input 1:
// A = [4, 3, 2, 6]
// B = 2
// C = 5
// Output 1:
// 1

const solve = (A, B, C) => {
    const n = A.length
    let sum = 0
    for (let i = 0; i < B; i++) {
        sum += A[i]
    }
    if (sum === C) return 1
    let s = 1
    let e = B
    while (e < n) {
        sum = sum + A[e] - A[s - 1]
        if (sum === C) return 1
        e++
        s++
    }
    return 0
}

// console.log(solve([4, 3, 2, 6], 2, 5));
// console.log(solve([ 6, 3, 3, 6, 7, 8, 7, 3, 7 ], 2, 10));
console.log(solve([62, 80, 92, 29, 84, 63, 14, 10, 3, 62, 50], 1, 63))
