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

const nums = [1, 2, 2];

subsetsWithDup(nums);