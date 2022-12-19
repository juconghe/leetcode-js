/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const helper = (index, subset) => {
        if (index === nums.length) {
            result.push(subset);
        } else {
            helper(index + 1, [nums[index], ...subset]);
            helper(index + 1, [...subset]);
        }
    }
    helper(0, []);
    return result;
};

subsets([1, 2, 3]);