/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false;
    const lookup = Object.create(null);
    const s2Lookup = Object.create(null);
    const windowSize = s1.length;
    let leftPtr = 0;
    let rightPtr = 0;
    for (let i = 0; i < s1.length; i++) {
        const current = s1[i];
        if (lookup[current]) {
            lookup[current] +=1;
        } else {
            lookup[current] = 1;
        }
    }

    while (rightPtr < s2.length) {
        const current = s2[rightPtr];
        if (s2Lookup[current] !== undefined) {
            s2Lookup[current] += 1;
        } else {
            s2Lookup[current] = 1;
        }

        if (rightPtr - leftPtr + 1 === windowSize) {
            const isPermutation = Object.keys(lookup)
                .every(key => s2Lookup[key] >= lookup[key]);
            if (isPermutation) return true;
            s2Lookup[s2[leftPtr]] -= 1;
            leftPtr += 1;
        }
        rightPtr += 1;
    }
    return false;
};

const input1 = 'ab';
const input2 = 'eidboaoo';

checkInclusion(input1, input2);