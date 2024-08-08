
// You should implement your task here.
module.exports = function towelSort(matrix) {
  let res = [];
  matrix.forEach((row, index) => {
    if (index % 2 === 0 || index === 0) {
      res.push(...row);
    } else {
      res.push(...row.reverse());
    }
    return res;
  });
}
