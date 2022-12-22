/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = {
        '2': [ 'a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const result = [];
    const backtracking = (index, subset) => {
        if (index === digits.length) {
            result.push(subset.join(''));
        } else {
            const currentLetters = letters[digits[index]];
            for (let i = 0; i < currentLetters.length; i++) {
                subset.push(currentLetters[i]);
                backtracking(index + 1, subset);
                subset.pop();
            }
        }
    }
    if (digits.length === 0) return [];
    backtracking(0, []);
    return result;
};


letterCombinations('23');