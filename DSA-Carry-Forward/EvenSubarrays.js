// You are given an integer array A.

// Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

// Return "YES" if it is possible; otherwise, return "NO" (without quotes).

function solve(A) {
    return A.length % 2 === 0 && A[0] % 2 === 0 && A[A.length - 1] % 2 === 0
}

console.log(solve([2, 4, 8, 7, 6]))