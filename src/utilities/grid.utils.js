
/**
 * Returns index of value in 1D array using 2D Coordinates
 * Note will not check for bounds violations
 * @param {int} x - X co-ordinate
 * @param {int} y - Y co-ordinate
 * @param {int} numCols - Number of columns in the grid (width)
 * @returns {int}
 **/
export const getIndexlAtXY = (x, y, numCols) => x + (y * numCols);


/**
 * Returns index of value in 1D array using 2D Coordinates
 * Note will not check for bounds violations
 * @param {int} x - X co-ordinate
 * @param {int} y - Y co-ordinate
 * @param {int} numCols - Number of columns in the grid (width)
 * @param {array} grid - 1D array representing 2D grid
 * @returns {any} - Value found in grid array at given X, Y
 **/
export const getValueAtXY = (x, y, numCols, grid) => grid[getIndexlAtXY(x, y, numCols)];