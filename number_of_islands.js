/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const allOnes = findAllOnes(grid);
    const hashOnes = new Set(allOnes);
    const gridRow = grid.length;
    const gridColumn = grid[0].length;
    let count = 0;
    while(hashOnes.size) {
        const current = allOnes.shift();
        if (!hashOnes.has(current)) continue;
        const stack = [current];
        while(stack.length) {
            const key = stack.shift();
            if (!hashOnes.has(key)) continue;
            hashOnes.delete(key);
            const [r, c] = key.split(',');
            const row = parseInt(r, 10);
            const column = parseInt(c, 10);
            if (row - 1 >= 0 && grid[row-1][column] === '1') {
                stack.push(`${row-1},${column}`);
            }
            if (row + 1 < gridRow && grid[row+1][column] === '1') {
                stack.push(`${row+1},${column}`);
            }
            if (column - 1 >= 0 && grid[row][column-1] === '1') {
                stack.push(`${row},${column-1}`);
            }
            if (column + 1 < gridColumn && grid[row][column+1] === '1') {
                stack.push(`${row},${column+1}`);
            }
        }
        count += 1;
    }
    console.log(count);
    return count;
};

/**
 * @param {character[][]} grid
 * @return {string[]}
 */
var findAllOnes = function(grid) {
    const result = [];
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0 ; j < grid[0].length; j += 1) {
            if (grid[i][j] === '1') {
                result.push(`${i},${j}`);
            }
        }
    }
    return result;
};

const test = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

numIslands(test);