/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const prefix = Array.from({ length: nums.length });
    const posfix = Array.from({ length: nums.length });
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        prefix[i] = ((prefix[i - 1] ?? 1) * nums[i]);
        posfix[nums.length - i - 1] = ((posfix[nums.length - i] ?? 1) * nums[nums.length - i - 1]);
    }
    for (let i = 0; i <nums.length; i ++) {
        result.push((prefix[i - 1] ?? 1) * (posfix[i + 1] ?? 1));
    }
    return result;
};

productExceptSelf([1, 2, 3, 4]);