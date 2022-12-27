/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0;
    const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const dfs = (row, colum) => {
        if (row < 0 || row === grid.length) return 0;
        if (colum < 0 || colum === grid[0].length) return 0;
        if (grid[row][colum] === 0) return 0;
        grid[row][colum] = 0;
        let sum = 0;
        for (let i = 0; i < offsets.length; i++) {
            sum += dfs(row + offsets[i][0], colum + offsets[i][1]);
        }
        return 1 + sum;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(dfs(i, j, 0), max);
            }
        }
    }
    return max;
};

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

maxAreaOfIsland(grid);