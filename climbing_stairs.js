/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let prev1 = 1;
    let prev2 = 2;
    for(let i = 3; i <= n; i++) {
        const temp = prev2;
        prev2 = prev1 + prev2;
        prev1 = temp;
    }
    return prev2;
};