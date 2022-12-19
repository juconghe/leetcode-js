/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const helper = (index, subset, sum) => {
        if (sum > target) return;
        if (sum === target) {
            result.push(subset);
        } else if (index < candidates.length) {
            const current = candidates[index];
            const newSum = current + sum;
            helper(index, [current, ...subset], newSum);
            helper(index + 1, subset, sum);
        }
    }
    helper(0, [], 0);
    return result;
};

const candidates = [2,3,5];
const target = 8;

combinationSum(candidates, target);