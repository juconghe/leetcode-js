/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const helper = (index, subset) => {
        if (subset.length === nums.length) {
            result.push(subset);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (subset.indexOf(nums[i]) === -1) {
                    helper(i + 1, [nums[i], ...subset]);
                }
            } 
        }
    }
    helper(0, []);
    return result;
};

permute([1, 2, 3]);