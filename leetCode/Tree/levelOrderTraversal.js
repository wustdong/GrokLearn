/**
 * leetcode  102
 * 二叉树的层序遍历
 * 【广度优先搜索（BFS）】
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if(!root) return [];

    const queue = [root];

    while(queue.length > 0) {
        const level = [];
       const levelSize = queue.length;
       for (let i = 0; i < levelSize; i++) {
            const node = queue.pop();
            if(node.left) queue.push(node.left); 
            if(node.right) queue.push(node.right);
            level.push(node.val)
        } 
        result.push(level);
    }
    return result

};


const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null 
        },
        right: {
            val: 7,
            left: null,
            right: null 
        }
    }
}

console.log(levelOrder(root))