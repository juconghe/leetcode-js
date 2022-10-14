/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    if (cost.length === 1) return cost[0];
    if (cost.length === 2 ) return Math.min(cost[0], cost[1]);
    const lookUp = [cost[0], cost[1]];
    for (let i = 2; i < cost.length; i++) {
        lookUp.push(Math.min(cost[i] + lookUp[i-1], cost[i] + lookUp[i-2]));
    }
    return Math.min(lookUp[cost.length-1], lookUp[cost.length-2]);
};