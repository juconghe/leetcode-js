/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const isPalindrome = input => {
        let left = 0;
        let right = input.length - 1;
        while(left <= right) {
            if (input[left++] != input[right--]) return false;
        }
        return true;
    }

    const backtracking = (index, subset) => {
        if (index === s.length) {
            result.push([...subset]);
        } else {
            for (let i = index; i < s.length; i++) {
                const leftHalf = s.slice(index, i + 1);
                if (isPalindrome(leftHalf)) {
                    subset.push(leftHalf);
                    backtracking(i + 1, subset);
                    subset.pop();
                }
            }
        }
    }

    backtracking(0, [], s);
    return result;
};

partition('aaba');