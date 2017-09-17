import React from 'react';
import ReactDOM from 'react-dom';
import { getIndexlAtXY } from './../../src/utilities/grid.utils';

describe('getIndexlAtXY function to get the index of a 2D Coord in a 1D array of set width and height.', () => {
  // @params x, y, numCols

  it('value is on first row (y value == 0)', () => {
    const tests = [
      [[5, 0, 10], 5],
      [[13, 0, 20], 13]
    ];
    tests.forEach((dp) => expect(getIndexlAtXY(...dp[0])).toBe(dp[1]))
  });

  it('value is on first column(x == 0) but on another row', () => {
    const tests = [
      [[0, 1, 1], 1],
      [[0, 12, 1], 12],
      [[0, 3, 5], 15]
    ];
    tests.forEach((dp) => expect(getIndexlAtXY(...dp[0])).toBe(dp[1]))
  });

  it('value is on variable column and variable row', () => {
    const tests = [
      [[1, 1, 3], 4],
      [[3, 2, 4], 11],
      [[0, 3, 5], 15]
    ];
    tests.forEach((dp) => expect(getIndexlAtXY(...dp[0])).toBe(dp[1]))
  });

});

