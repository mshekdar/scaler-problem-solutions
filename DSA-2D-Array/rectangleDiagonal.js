const printDiagonals = (A) => {
  const n = A.length;
  const m = A[0].length;

  for(let c = 0; c < m; c++) {
    let i = 0;
    let j = c;
    const diagonal = [];
    while( i < n && j >= 0) {
        diagonal.push(i +'-' + j);
        i++;
        j--;
    }
    console.log(diagonal)
  }

  for(let r = 1; r < n; r++) {
    let i = r;
    let j = m-1;
    const diagonal = [];
    while( i < n && j >= 0) {
        diagonal.push(i +'-' + j);
        i++;
        j--;
    }
    console.log(diagonal)
  }
};

printDiagonals([
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
]);
