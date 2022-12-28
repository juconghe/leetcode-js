/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const constructQueue = value => {
        const rotten = [];
        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COLUMN; c++) {
                if (grid[r][c] === value) rotten.push([r, c]);
            }
        }
        return rotten;
    }

    const ROW = grid.length;
    const COLUMN = grid[0].length;
    const queue = constructQueue(2);
    const freshQueue = constructQueue(1);
    if (freshQueue.length === 0) return 0;
    const offsets = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    let count = -1;
    while (queue.length) {
        let queueLength = queue.length;
        while(queueLength > 0) {
            const [row, column] = queue.shift();
            for (let i = 0; i < offsets.length; i++) {
                const newRow = row + offsets[i][0];
                const newColumn = column + offsets[i][1];
                if (newRow < 0 || newRow === ROW) continue;
                if (newColumn < 0 || newColumn === COLUMN) continue;
                if (grid[newRow][newColumn] === 1) {
                    grid[newRow][newColumn] = 2;
                    queue.push([newRow, newColumn]);
                }
            }
            queueLength -= 1;
        }
        count += 1;
    }

    const newQueue = constructQueue(1);
    return newQueue.length === 0 ? count : -1;
};

const grid = [[0]];

orangesRotting(grid);