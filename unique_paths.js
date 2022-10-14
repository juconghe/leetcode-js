/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const buildMatrix = () => {
        const matrix = [];
        for (let i = 0; i < m; i++) {
            if (i === 0) {
                matrix.push(Array.from({ length: n }).fill(1));
            } else {
               const arry = Array.from({ length: n }).fill(0);
               arry[0] = 1;
               matrix.push(arry);
            }
        }
        return matrix;
    }
    if (m < 2 || n < 2) return 1;
    const table = buildMatrix();
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            table[i][j] = table[i-1][j] + table[i][j-1];
        }
    }
    return table[m-1][n-1];
};

console.log(uniquePaths(3, 3));