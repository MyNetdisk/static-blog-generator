---
title: 将有序数组转换为二叉搜索树
date: 2021-11-17
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

<!-- more -->

# 108. 将有序数组转换为二叉搜索树

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例 1：

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：

输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 解题思路

二叉搜索树：左子树节点都小于根节点值，右子树节点都大于根节点值。

由于 nums 已经升序排列，要构造高度平衡二叉树，所以只需将中间值作为根节点，左边数组的数去构造左子树，右边数组的数去构造右子树，递归构造。

```js
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  const middle = nums.length >> 1;
  return new TreeNode(
    nums[middle],
    sortedArrayToBST(nums.slice(0, middle)),
    sortedArrayToBST(nums.slice(middle + 1))
  );
}
```

作者：lzxjack
链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/solution/di-gui-gou-zao-javascript-by-lzxjack-i8zp/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
