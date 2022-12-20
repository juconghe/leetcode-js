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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_backtracking = function(nums) {
    const result = [];
    
    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    const backtracking = (index) => {
        if (index === nums.length) {
            result.push([...nums]);
        } else {
            for (let i = index; i < nums.length; i++) {
               swap(index, i);
               backtracking(index + 1);
               swap(index, i);
            } 
        }
    }
    backtracking(0);
    return result;
};

permute([1, 2, 3]);
permute_backtracking([1, 2, 3])