/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const find_rotate_index = (left, right) => {
        if (nums[left] < nums[right])
          return 0;
    
        while (left <= right) {
          const pivot = Math.floor((left + right) / 2);
          if (nums[pivot] > nums[pivot + 1]) return pivot + 1;
          if (nums[pivot] < nums[left]) {
              right = pivot - 1;
            } else {
              left = pivot + 1;
            }
        }
        return 0;
      }

    const binary_search = function(lowBound, highBound) {
        let low = lowBound;
        let high = highBound;
        while(low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    };
    if (nums.length === 1) {
        if (nums[0] === target) return 0;
        return -1;
    };
    const pivot = find_rotate_index(0, nums.length - 1);
    if (pivot === 0) return binary_search(0, nums.length - 1);
    if (target < nums[0]) return binary_search(pivot, nums.length - 1);
    return binary_search(0, pivot);
};

search([3, 1], 1);