/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    /**
     * 
     * @param {number} row 
     * @param {number} colum 
     * @param {string} word 
     */
    const backtracking = (row, colum, index) => {
        if (row < 0 || row === board.length) return false;
        if (colum < 0 || colum === board[0].length) return false;
        if (index === word.length - 1) return word[index] === board[row][colum];
        if (word[index] !== board[row][colum]) return false;
        board[row][colum] = '#'
        let result = false;
        for (let i = 0; i < offsets.length; i++) {
            if (backtracking(row + offsets[i][0], colum + offsets[i][1], index + 1)) {
                result = true;
                break;
            }
        }
        board[row][colum] = word[index];
        return result;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++ ) {
            if (backtracking(i, j, 0)) return true;
        }
    }
    return false ;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "SEE";

exist(board, word);