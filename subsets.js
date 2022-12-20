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


var subset_backtracking = function(nums) {
    const result = [];

    const backtracking = (index, subset) => {
        result.push([...subset]);

        for(let i = index; i < nums.length; i++) {
            subset.push(nums[i]);
            backtracking(i+1, subset);
            subset.pop();
        }
    }

    backtracking(0, []);
    return result;

}

subset_backtracking([1, 2, 3]);