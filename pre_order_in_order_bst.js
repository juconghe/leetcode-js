function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   if (preorder.length === 0 && inorder.length === 0) return null;
   const node = new TreeNode(preorder[0]);
   const mid = inorder.findIndex(v => v === node.val);
   node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
   node.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
   return node;
};

const preorder = [1,2,4,5,3,6,7];
const inorder = [4,2,5,1,6,3,7];

buildTree(preorder, inorder);