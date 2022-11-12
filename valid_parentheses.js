/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (!mapping[current]) {
            stack.push(current);
        } else {
            const topElement = stack[stack.length - 1];
            if (mapping[current] !== topElement) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
};

const s = "(]";

isValid(s);