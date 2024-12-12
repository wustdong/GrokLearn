/**
 * leetcode 226  invert binary tree
 */

function invertTree(root) {
    if(!root) return null;

    invertTree(root.left);
    invertTree(root.right);

    /**
     * 为何可以省略变量保存？
     * 递归调用 invertTree(root.left) 和 invertTree(root.right) 的作用是翻转左右子树：
     * 递归过程中，root.left 和 root.right 的引用会被直接更新。
     * 在 [root.left, root.right] = [root.right, root.left] 的交换操作中，你只关心当前节点的子树引用。
     */
    [root.left, root.right] = [root.right, root.left];

    return root //将当前节点 root 返回，供上层递归调用使用
}

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
invertTree(root);

console.log(root)

// leetcode 中的输入是【层序遍历】后得到的【数组】