/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const ROW = board.length;
    const COLUMN = board[0].length;
    const offsets = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    const dfs = (row, column, frontier) => {
        if (row < 0 || row === ROW) return true;
        if (column < 0 || column === COLUMN) return true;
        if (board[row][column] === 'X') return false;
        if (frontier.has(`${row},${column}`)) return false;
        frontier.add(`${row},${column}`)
        let reachable = false;
        for (let i = 0; i < offsets.length; i++) {
            reachable = reachable || dfs(row + offsets[i][0], column + offsets[i][1], frontier);
        }
        return reachable;
    }

    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COLUMN; c++) {
            if (board[r][c] === 'O') {
                const frontier = new Set([]);
                const reachable = dfs(r, c, frontier);
                if (!reachable) {
                    for (const f of frontier) {
                        const [row, column] = f.split(',');
                        board[row][column] = 'X';
                    }
                }
            }
        }
    }
};

const board = [
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"]
];

solve(board);