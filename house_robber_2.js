/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    const helper = (index, lookup) => {
        if (index >= nums.length) return 0;
        if (lookup[index] !== undefined) return lookup[index];
        lookup[index] = Math.max(nums[index] + helper(index + 2, lookup), helper(index + 1, lookup));
        return lookup[index];
    }

    const temp = nums.shift();
    const firstAttempt = helper(0, Object.create(null));
    nums.unshift(temp);
    nums.pop();
    const secondAttempt = helper(0, Object.create(null));

    return Math.max(firstAttempt, secondAttempt);
};

const nums = [1,2,3,1];

rob(nums);