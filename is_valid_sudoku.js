/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const rowConstraints = Object.create(null);
    const columnConstraints = Object.create(null);
    const localConstraints = Object.create(null);

    const getLocalKey = (i, j) => {
        let key = '';
        if (i < 3) {
            key = '1';
        } else if (i < 6) {
            key = '4'
        } else {
            key = '7'
        }

        if (j < 3) {
            key =`${key},1`;
        } else if (j < 6) {
            key = `${key},4`
        } else {
            key = `${key},7`
        }
        return key;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const value = board[i][j];
            if (value === '.') continue;
            const local = getLocalKey(i, j);
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