/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    const lookup = Object.create(null);
    let longestLength = 0;
    let hasOdd = false;
    for (let i = 0; i < s.length; i += 1) {
        const current = s[i];
        if (lookup[current]) {
            lookup[current] += 1;
        } else {
            lookup[current] = 1;
        }
    }
    Object.values(lookup).forEach(v => {
        if (v % 2 === 0) {
            longestLength += v;
        } else {
            hasOdd = true
            longestLength += (v - 1)
        }
    });
    return longestLength + (hasOdd ? 1 : 0);
};

console.log(longestPalindrome("bb"))