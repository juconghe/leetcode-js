/**
 * @param {number[]} nums
 * @param {number} target
 * @param {Set<string>} frontier
 * @return {number[]}
 */
 var twoSum = function(nums, target, frontier) {
    const lookup = Object.create(null);
    const sums = [];
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (Number.isNaN(current)) continue;
        const comp = target - current;
        if (lookup[current] !== undefined) {
            const result = [comp, current, -1 * target];
            result.sort();
            const hash = result.join();
            if (frontier.has(hash)) continue;
            frontier.add(hash)
            sums.push(result);
        } else {
            lookup[comp] = i;
        }
    }
    return sums;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const result = [];
    const frontier = new Set([]);
    const keyForntiner = new Set([]);
    for (let i = 0; i < nums.length; i++) {
        if (keyForntiner.has(nums[i])) continue;
        keyForntiner.add(nums[i]);
        const copy = [...nums];
        copy[i] = NaN;
        const temp = twoSum(copy, 0 - nums[i], frontier);
        result.push(...temp);
    }
    return result;
};

const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
threeSum(nums);