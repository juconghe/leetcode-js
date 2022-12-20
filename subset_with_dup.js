/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = [];
    const helper = (index, subset) => {
        if (index === nums.length) {
            result.push(subset);
        } else {
            helper(index + 1, [nums[index], ...subset]);
            if (subset.indexOf(nums[index]) === -1) {
                helper(index + 1, [...subset]);
            }
        }
    }
    helper(0, []);
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup_backtracking = function (nums) {
    const result = [];
    const backtracking = (index, subset) => {
        result.push([...subset]);

        for(let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i - 1]) {
                continue;
            }
            subset.push(nums[i]);
            backtracking(i + 1, subset);
            subset.pop();
        }
    }
    nums.sort((a, b) => a - b);
    backtracking(0, []);
    return result;
};

const nums = [10,1,2,7,6,1,5];
subsetsWithDup(nums);
subsetsWithDup_backtracking(nums);