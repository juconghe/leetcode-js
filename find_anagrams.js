/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if (s.length < p.length) return [];
    const pTable = Object.create(null);
    const sTable = Object.create(null);
    for (let i = 0; i < p.length; i++) {
        const pValue = p[i];
        const sValue = s[i];
        if (!pTable[pValue]) {
            pTable[pValue] = 1
        } else {
            pTable[pValue] += 1;
        }

        if (!sTable[sValue]) {
            sTable[sValue] = 1;
        } else {
            sTable[sValue] += 1;
        }
    }

    const result = [];
    for (let i = 0; i <= s.length - p.length; i++) {
        if (Object.entries(pTable).every(([key, value]) => sTable[key] === value)) {
            result.push(i);
        }
        const left = s[i];
        const right = s[i + p.length];
        if (--sTable[left] === 0) {
            delete sTable[left];
        }
        if (sTable[right]) {
            sTable[right] += 1;
        } else {
            sTable[right] = 1;
        }
    }
    return result;
};

findAnagrams('abab', 'ab');