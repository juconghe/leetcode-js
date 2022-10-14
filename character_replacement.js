/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let lookup = Object.create(null);
    let leftPtr = 0;
    let rightPtr = 0;
    let length = 0;
    let maxFreq = 0;

    while(leftPtr < s.length && rightPtr < s.length) {
        const current = s[rightPtr];
        if (lookup[current]) {
            lookup[current] += 1;
        } else {
            lookup[current] = 1;
        }
        const tempLength = (rightPtr - leftPtr) + 1;
        let prevMax = maxFreq;
        maxFreq = Math.max(maxFreq, lookup[current]);
        if (tempLength - maxFreq <= k) {
            length = Math.max(length, tempLength);
            rightPtr += 1;
        } else {
            lookup[s[leftPtr]] -= 1;
            lookup[current] -= 1;
            maxFreq = prevMax;
            leftPtr += 1;
        }
    }
   return length;
};

console.log(characterReplacement("AABABBA", 1))