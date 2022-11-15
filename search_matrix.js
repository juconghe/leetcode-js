/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const m = matrix.length;
     if (m === 0) return false;
    const n = matrix[0].length; 
    let low = 0;
    let high = m * n -1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midElement = matrix[Math.floor(mid / n)][mid % n]
        if (midElement === target) return true;
        if (midElement > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};

const matrix = [[1]];
searchMatrix(matrix, 1);