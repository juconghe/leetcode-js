/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);
    const backtracking = (index, subset, sum) => {
        if (sum > target || index > candidates.length) return;
        if (sum === target) {
            result.push([...subset]);
        } else {
            for(let i = index; i < candidates.length; i++) {
                if (i !== index && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                subset.push(candidates[i]);
                backtracking(i + 1, subset, sum + candidates[i]);
                subset.pop();
            }
        }
    }

    backtracking(0, [], 0);
    return result;
};

const candidates =[10,1,2,7,6,1,5];
const target = 8;

combinationSum2(candidates, target);