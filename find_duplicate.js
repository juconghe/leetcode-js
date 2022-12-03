/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    // phase 1
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }

    // phase 2
    slow = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[fast];
        if (slow === fast) return fast;
    }

};