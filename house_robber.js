/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const lookup = Object.create(null);

    const helper = (index) => {
        if (index >= nums.length) return 0;
        if (lookup[index] !== undefined) return lookup[index];
        lookup[index] = Math.max(nums[index] + helper(index + 2), helper(index + 1));
        return lookup[index];
    }

    return helper(0, 0);
};

const nums = [1,2,1,1];

console.log(rob(nums));