// Given an array A of N integers. Count the number of elements that have at least 1 elements greater than itself.
// Input 1:
// A = [3, 1, 2]
// Output 1:
// 2

const solve = (A) => {
  const max = Math.max(...A);
  const countMax = A.filter((el) => el === max).length;
  return A.length - countMax;
};

console.log(solve([3, 1, 2]));
