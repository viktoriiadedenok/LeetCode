var islandPerimeter = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === 1) {
        if (grid[i - 1] && 1) {
          if (grid[i][k] !== grid[i - 1][k]) {
            count += 1;
          }
        } else {
          count += 1;
        }
        if (grid[i + 1] && 1) {
          if (grid[i][k] !== grid[i + 1][k]) {
            count += 1;
          }
        } else {
          count += 1;
        }
        if (grid[i][k] !== grid[i][k - 1]) {
          count += 1;
        }
        if (grid[i][k] !== grid[i][k + 1]) {
          count += 1;
        }
      }
    }
  }
  return count;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]);
islandPerimeter([
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]);
