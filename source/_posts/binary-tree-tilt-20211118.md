---
title: 二叉树的坡度
date: 2021-11-18
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给定一个二叉树，计算 整个树 的坡度 。

<!-- more -->

# 563. 二叉树的坡度

给定一个二叉树，计算 整个树 的坡度 。

一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。

整个树 的坡度就是其所有节点的坡度之和。

示例 1：

输入：root = [1,2,3]
输出：1
解释：
节点 2 的坡度：|0-0| = 0（没有子节点）
节点 3 的坡度：|0-0| = 0（没有子节点）
节点 1 的坡度：|2-3| = 1（左子树就是左子节点，所以和是 2 ；右子树就是右子节点，所以和是 3 ）
坡度总和：0 + 0 + 1 = 1

示例 2：

输入：root = [4,2,9,3,5,null,7]
输出：15
解释：
节点 3 的坡度：|0-0| = 0（没有子节点）
节点 5 的坡度：|0-0| = 0（没有子节点）
节点 7 的坡度：|0-0| = 0（没有子节点）
节点 2 的坡度：|3-5| = 2（左子树就是左子节点，所以和是 3 ；右子树就是右子节点，所以和是 5 ）
节点 9 的坡度：|0-7| = 7（没有左子树，所以和是 0 ；右子树正好是右子节点，所以和是 7 ）
节点 4 的坡度：|(3+5+2)-(9+7)| = |10-16| = 6（左子树值为 3、5 和 2 ，和是 10 ；右子树值为 9 和 7 ，和是 16 ）
坡度总和：0 + 0 + 0 + 2 + 7 + 6 = 15

示例 3：

输入：root = [21,7,14,1,1,2,2,3,3]
输出：9



提示：

树中节点数目的范围在 [0, 104] 内
-1000 <= Node.val <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-tilt
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 思路和算法

根据题意，我们需要累计二叉树中所有结点的左子树结点之和与右子树结点之和的差的绝对值。因此，我们可以使用深度优先搜索，在遍历每个结点时，累加其左子树结点之和与右子树结点之和的差的绝对值，并返回以其为根结点的树的结点之和。

具体地，我们实现算法如下：

从根结点开始遍历，设当前遍历的结点为 $\textit{node}$；
遍历 $\textit{node}$ 的左子结点，得到左子树结点之和 $\textit{sum\_left}$；遍历 $\textit{node}$ 的右子结点，得到右子树结点之和 $\textit{sum\_right}$；
将左子树结点之和与右子树结点之和的差的绝对值累加到结果变量 $\textit{ans}$；
返回以 $\textit{node}$ 作为根结点的树的结点之和 $\textit{sum\_left} + \textit{sum\_right} + \textit{node}.\textit{val}$。

# 复杂度分析

时间复杂度：O(n)O(n)，其中 nn 为二叉树中结点总数。我们需要遍历每一个结点。

空间复杂度：O(n)O(n)。在最坏情况下， 当树为线性二叉树（即所有结点都只有左子结点或没有结点）时，树的高度为 n - 1n−1，在递归时我们需要存储 nn 个结点。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/binary-tree-tilt/solution/er-cha-shu-de-po-du-by-leetcode-solution-7rha/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 代码

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTilt(root: TreeNode | null): number {
  let ans = 0;
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);
    ans += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };
  dfs(root);
  return ans;
}
```
