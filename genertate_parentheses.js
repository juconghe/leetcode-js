/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];
    const backTracking = function(open, close, term) {
        if (open === n && close === n) {
            result.push(term);
        } else if (open <= n) {
            if (open < n) {
                backTracking(open + 1, close, `${term}(`);
            }
            if (open > close) {
                backTracking(open, close + 1, `${term})`);
            }
        }
    }
    backTracking(0, 0, '');
    return result;
};

generateParenthesis(2);