/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
   [2, 0, 3, 3]
  ]
 *
 * The result should be 9
 */

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function matrixElementsSum(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    const currRow = matrix[row];
    for (let col = 0; col < currRow.length; col++) {
      if (currRow[col] === 0) {
        if (row + 1 < matrix.length) {
          matrix[row + 1][col] = 0;
        }
      } else {
        sum += currRow[col];
      }
    }
  }
  return sum;
}

matrixElementsSum(matrix);

module.exports = getMatrixElementsSum;
