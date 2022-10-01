/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    const list = [0, 1, 2];
    for(let i = 3; i <= n; i++) {
        list.push(list[i-1] + list[i-2]);
    }
    console.log(list);
    return list[n];
};

console.log(climbStairs(10));