/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const rowConstraints = Object.create(null);
    const columnConstraints = Object.create(null);
    const localConstraints = Object.create(null);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const value = board[i][j];
            if (value === '.') continue;
            const local = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
            if (rowConstraints[i]) {
                if (rowConstraints[i].has(value)) return false;
                rowConstraints[i].add(value);
            } else {
                rowConstraints[i] = new Set([value]);
            }
            if (columnConstraints[j]) {
                if (columnConstraints[j].has(value)) return false;
                columnConstraints[j].add(value);
            } else {
                columnConstraints[j] = new Set([value]);
            }
            if (localConstraints[local]) {
                if (localConstraints[local].has(value)) return false;
                localConstraints[local].add(value);
            } else {
                localConstraints[local] = new Set([value]);
            }
        }
    }
    return true;
};

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
isValidSudoku(board);