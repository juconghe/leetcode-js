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

var combinationSum_backtracking = function(candidates, target) {
    const result = [];
    const backtracking = (index, subset, sum) => {
        if (sum > target) return;
        if (sum === target) {
            result.push([...subset]);
        }
        for (let i = index; i < candidates.length; i++) {
            subset.push(candidates[i]);
            backtracking(i, subset, candidates[i] + sum);
            subset.pop();
        }
    }
    backtracking(0, [], 0);
    return result;
};

const candidates = [2,3,6,7];
const target = 7;

combinationSum_backtracking(candidates, target);