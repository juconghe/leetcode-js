/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const [encodingS, uniqueLetterS] = createEncoding(s);
    const [encodingT, uniqueLetterT] = createEncoding(t);
    return encodingS === encodingT && uniqueLetterS === uniqueLetterT;
};

/**
 * @param {string} s 
 * @return {string}
 */
const createEncoding = s => {
    const lookUp = {};
    let encoding = '';
    s.split('').forEach((c, index) => {
        if (!lookUp[c]) {
            lookUp[c] = index;
        }
        encoding = `${encoding}${lookUp[c]}`;
    })
    return [encoding, Object.keys(lookUp).length];
}

console.log(isIsomorphic("ab", "aa"));