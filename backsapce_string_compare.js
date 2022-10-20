/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const BACKSAPCE = '#';
    const createStack = input => {
        const stack = [];
        for (let i = 0; i < input.length; i++) {
            const current = input[i];
            if (current === BACKSAPCE) {
                if (stack.length) {
                    stack.pop();
                }
            } else {
                stack.push(current);
            }
        }
        return stack;
    }
    const sStack = createStack(s);
    const tStack = createStack(t);
    if (sStack.length !== tStack.length) return false;
    for (let i = 0; i < sStack.length; i++) {
        if (sStack[i] !== tStack[i]) return false;
    }
    return true;
};

backspaceCompare("ab#c", "ad#c")