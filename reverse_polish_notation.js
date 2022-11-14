/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = [];
    const operation = new Set(['+', '-', '*', '/']);

    const doOperation = (num1, num2, operation) => {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            default:
                return Math.trunc(num1 / num2)
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        const current = tokens[i];
        if (operation.has(current)) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            stack.push(doOperation(num1, num2, current));
        } else {
            stack.push(parseInt(current, 10));
        }
    }
    return stack.pop();
};

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

evalRPN(tokens);