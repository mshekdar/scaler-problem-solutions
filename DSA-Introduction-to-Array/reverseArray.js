var a = [1, 2, 3, 4];
reverse(a);
console.log(a);

function reverse(a) {
  const n = a.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;

    i++;
    j--;
  }
}
