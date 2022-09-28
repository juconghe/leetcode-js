/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let totalSum = 0;
    let leftSum = 0;
    nums.forEach(v => {
        totalSum += v;
    });
    for (let i = 0; i< nums.length; i += 1) {
        if (leftSum == totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i]
    }
    return -1;
};

console.log(pivotIndex([-1,-1,-1,-1,0,0]))