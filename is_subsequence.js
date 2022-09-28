/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let ptr1 = 0;
    let ptr2 = 0;
    while(ptr1 < s.length && ptr2 < t.length) {
        if (s[ptr1] === t[ptr2]) {
            ptr1 +=1;
            ptr2 +=1;
        } else {
            ptr2 += 1;
        }
    }
    return ptr1 === s.length;
};

console.log(isSubsequence("axc", "ahbgdc"));