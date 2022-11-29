var mySqrt = function(x) {
    let low = 1;
    let high = x;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const squarded = mid * mid;
        if (squarded === x) return mid;
        if (squarded > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return high;
};

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guessed = guess(mid);
        if (guessed === 0) return mid;
        if (guessed === -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        if (nums[mid] < nums[left]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[0];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target && nums[mid] === nums[mid - 1] && nums[mid] === nums[mid + 1]) return [left, right];
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    if (nums[left] === target && nums[right] === target) return[left, right];
    if (nums[right] === target) return [right, right];
    if (nums[left] === target) return [left, left]
    return [-1, -1]
};
