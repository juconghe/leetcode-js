function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = null;
    const inorder = function (root) {
        if (root === null) {
            return true;
        }
        if (!inorder(root.left)) {
            return false;
        }
        if (prev != null && root.val <= prev) {
            return false;
        }
        prev = root.val;
        return inorder(root.right);
    }
    return inorder(root);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST_Recursive = function (root) {
    const helper = function (newRoot, lowerBound, upperBound) {
        if (newRoot === null) {
            return true;
        }
        if (
         (lowerBound !== null && newRoot.val <= lowerBound) 
         || (upperBound !== null && newRoot.val >= upperBound)
         ) {
                return false;
            }

        return helper(newRoot.left, lowerBound, newRoot.val) && helper(newRoot.right, newRoot.val, upperBound);
    }
    return helper(root, null, null);
};

isValidBST(new TreeNode(0, null, new TreeNode(-1)));