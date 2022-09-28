/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const subLookup = {
        'I': ['X', 'V'],
        'X': ['L', 'C'],
        'C': ['D', 'M']
    };
    const valueLookup = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if (s.length === 1) return valueLookup[s[0]];
    let sum = 0;
    let i = 0;
     while(i < s.length) {
        const current = s[i];
        const next = s[i + 1];
        const lookup = subLookup[current] || [];
        if (lookup.includes(next)) {
            sum += (valueLookup[next] - valueLookup[current]);
            i += 2;
        } else {
            sum += valueLookup[current];
            i += 1;
        }
    }
    return sum;
};

romanToInt('XLIX');
romanToInt('III');
romanToInt('MCMXCIV');
romanToInt('LVIII');