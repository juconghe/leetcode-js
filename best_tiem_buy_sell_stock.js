/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let profit = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i += 1) {
        const current = prices[i];
        if (current > min) {
            profit = Math.max(current - min, profit);
        } else {
            min = current;
        }
    }
    return profit;
};