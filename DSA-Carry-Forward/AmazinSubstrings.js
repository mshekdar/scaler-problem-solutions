// You are given a string S, and you have to find all the amazing substrings of S.

// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

// Input

// Only argument given is string S.
// Output

// Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

function solve(A) {
    const arr = A.toLowerCase().split('')
    const n = arr.length
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let sum = 0

    for (let i = 0; i < n; i++) {
        if (vowels.includes(arr[i])) {
            sum = (sum + (n - i)) % 10003
        }
    }

    return sum
}

console.log(solve('ABEC'))
