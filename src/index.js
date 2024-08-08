
// You should implement your task here.

module.exports = function towelSort(matrix) {
  matrix.forEach((row, index) => {
    if (index % 2 === 0) {
      [].push(...row);
    } else {
      [].push(...row.reverse());
    }
  })
  return [];
}
