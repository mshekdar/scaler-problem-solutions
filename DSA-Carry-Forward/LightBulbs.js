// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.

function solve(A) {
    const n = A.length
    let swaps = 0
    if (A[0] === 0) swaps++
    for (let i = 1; i < n; i++) {
        if (A[i] !== A[i - 1]) swaps++
    }
    return swaps
}

console.log(solve([0, 1, 0, 1]))
