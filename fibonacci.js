/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    const list = [0, 1];
    for (let i = 2; i <= n; i++) {
        list.push(list[i-1]+list[i-2]);
    }
    console.log(list);
    return list[n];
};
