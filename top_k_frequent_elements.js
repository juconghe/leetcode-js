/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const countTable = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (countTable[current]) {
            countTable[current] += 1;
        } else {
            countTable[current] = 1;
        }
    }
    const result = Object.entries(countTable)
        .sort((a, b) => -1*(a[1] - b[1]))
        .slice(0, k)
        .map(([key]) => key);
    return result;
};

topKFrequent([1,1,1,2,2,3], 2);