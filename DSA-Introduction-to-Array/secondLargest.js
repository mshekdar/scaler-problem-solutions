function solve (A) {
    const unique = new Set(A);
    const uniqueArray = [...unique];
    if (uniqueArray.length === 1) return -1
    return uniqueArray.map(a => Number.parseInt(a)).sort((a, b) => b - a)[1]
}

console.log(solve([1, 2, 3, 2, 3]));

