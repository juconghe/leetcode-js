/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    const imageRow = image.length;
    const imageColumn = image[0].length;
    const beginColor = image[sr][sc];

    const stack = [[sr, sc]];
    const frontier = new Set([]);
    while(stack.length > 0) {
        const [row, column] = stack.pop();
        const key = `${row},${column}`;
        if (frontier.has(key)) continue;
        frontier.add(key);
        image[row][column] = color;
        if (row - 1 >= 0 && image[row-1][column] === beginColor) {
            stack.push([row - 1, column]);
        }
        if (row + 1 < imageRow && image[row+1][column] === beginColor) {
            stack.push([row + 1, column]);
        }
        if (column - 1 >= 0 && image[row][column-1] === beginColor) {
            stack.push([row, column-1]);
        }
        if (column + 1 < imageColumn && image[row][column+1] === beginColor) {
            stack.push([row, column+1]);
        }
    }
    return image;
};

const test = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0 ,0]
];

floodFill(test, 0, 0, 0);