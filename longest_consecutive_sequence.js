/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const lookupSet = new Set(nums);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let cureent = nums[i];
        if (lookupSet.has(cureent-1)) continue;
        let count = 0;
        while(lookupSet.has(cureent)) {
            count += 1;
            cureent += 1;
        }
        max = Math.max(max, count);
    }
    return max;
};

const nums = [100, 4, 200, 1, 3, 2];
longestConsecutive(nums);