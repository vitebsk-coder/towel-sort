
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }
  let res = [];
  matrix.forEach((row, index) => {
    if (index % 2 === 0) {
      res.push(...row);
    } else {
      res.push(...row.reverse());
    }
  })
  return res;
}
