function pow(a, n) {
    if (n === 0) return 1
    const p = pow(a, Math.floor(n / 2))
    if (n % 2 === 0) {
        return p * p
    } else {
        return p * p * a
    }
}

console.log(pow(2, 5))
