/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i +=1) {
        const value = result[i - 1] ?? 0;
        result.push(nums[i] + value);
    }
    return result;
};

console.log(runningSum([1,2,3,4]))