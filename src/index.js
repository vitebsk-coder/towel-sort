
const towelSort = (matrix) => {
  let res = [];
  if (!Array.isArray(matrix)) {
    return [];
  }
  matrix.forEach((row, index) => {
    if (index % 2 === 0) {
      res.push(...row);
    } else {
      res.push(...row.reverse())
    }
  });
  return res;
}

