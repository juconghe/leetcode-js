/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const result = nums.length - k;
    const swap = (left, right) => {
        const temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
    }

    const getRandomIndex = (left, right) => {
        return left + Math.floor(Math.random() * (right - left));
    }
    const quickSelect = (left, right, pivot) => {
        let ptr = left;
        const pivotValue = nums[pivot];
        swap(pivot, right);
        for (let i = left; i <= right; i++) {
            if (nums[i] < pivotValue) {
                swap(i, ptr);
                ptr += 1;
            }
        }
        swap(ptr, right);
        if (ptr === result) return nums[ptr];
        if (ptr > result) return quickSelect(left, ptr - 1, getRandomIndex(left, ptr - 1));
        return quickSelect(ptr + 1, right, getRandomIndex(ptr + 1, right));
    }

    return quickSelect(0, nums.length - 1, getRandomIndex(0, nums.length - 1));
};

findKthLargest([3,2,1,5,6,4], 2)