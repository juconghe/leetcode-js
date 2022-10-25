/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const lookup = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const comp = target - current;
        if (lookup[current] !== undefined) {
            return [lookup[current], i];
        } else {
            lookup[comp] = i;
        }
    }
    return [];
};

console.log(twoSum([3,2,4], 6));