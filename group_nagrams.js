/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const result = Object.create(null);
    for (let i = 0; i < strs.length; i++) {
        const current = strs[i];
        const key = current.split('').sort().join();
        if (result[key]) {
            result[key].push(current);
        } else {
            result[key] = [current];
        }
    }
    return Object.values(result);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));