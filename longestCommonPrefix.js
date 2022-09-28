/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let index = 0;
    let prefix = '';
    while (index < strs[0].length) {
        const currentChar = strs[0][index];
        for (let j = 0; j < strs.length; j+= 1) {
            if (strs[j][index] !== currentChar) {
                return prefix;
            }
        }
        prefix = `${prefix}${currentChar}`;
        index += 1;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));