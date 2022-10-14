/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const [encodingS, uniqueLetterS] = createEncoding(s);
    const [encodingT, uniqueLetterT] = createEncoding(t);
    console.log(encodingS, encodingT);
    console.log(uniqueLetterS, uniqueLetterT);
    return encodingS === encodingT && uniqueLetterS === uniqueLetterT;
};

/**
 * @param {string} s 
 * @return {string}
 */
const createEncoding = s => {
    const lookUp = new Map();
    let encoding = '';
    let count = 0;
    s.split('').forEach((c, index) => {
        if (!lookUp.has(c)) {
            count += 1;
            lookUp.set(c, index);
        }
        encoding = `${encoding}${lookUp.get(c)}`;
    })
    return [encoding, lookUp.size];
}

console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck"));