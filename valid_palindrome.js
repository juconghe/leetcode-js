/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    let head = 0, tail = s.length - 1;
    const input = s.toLowerCase();
    const alphaNumericRegex = /[a-zA-Z0-9]/;
    while(head <= tail) {
        const headValue = input[head];
        const tailValue = input[tail];
       if (!alphaNumericRegex.test(headValue)) {
        head += 1;
        continue;
       }
       if (!alphaNumericRegex.test(tailValue)) {
        tail -= 1;
        continue;
       }
       if (input[head++] !== input[tail--]) return false;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));