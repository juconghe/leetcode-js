function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    const result = []
    if (!root) return result;
    let queue = [root];
    let level = 0;
    while (queue.length > 0) {
        let queueLength = queue.length;
        result.push([]);
        while(queueLength > 0) {
            const current = queue.shift();
            queueLength -= 1;
            result[level].push(current.val);
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right);
        }
        level += 1;
    }
    return result;
};