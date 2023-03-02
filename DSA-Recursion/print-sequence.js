// Print numbers in increasing & descreasing order using recursion

const asc = (N) => {
    if (N === 1) {
        console.log(N)
        return
    }
    asc(N - 1)
    console.log(N)
}

const desc = (N) => {
    if (N === 0) {
        return
    }
    console.log(N)
    desc(N - 1)
}

console.log(asc(4))
console.log(desc(4))
