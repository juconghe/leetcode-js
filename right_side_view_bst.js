function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = []
    if (!root) return result;
    let queue = [root];
    while (queue.length > 0) {
        let queueLength = queue.length;
        result.push(queue[queueLength - 1].val);
        while(queueLength > 0) {
            const current = queue.shift();
            queueLength -= 1;
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right);
        }
    }
    return result;
};