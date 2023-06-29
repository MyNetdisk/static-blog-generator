---
title: 最大子序和
date: 2021-10-19
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

<!-- more -->

# 53. 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组  [4,-1,2,1] 的和最大，为  6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 解题思路

用 DP 求解，因为这道题求的是最大和的连续子数组, 所以 DP[i]取决于 DP[i - 1] + nums[i] > nums[i],如果 nums[i]大，则从 nums[i]开始单独成一段，否则与之前的连成一段。所以可得方程 dp[i] = Math.max(dp[i - 1] + nums[i])。

可以查看最大子序和 c++实现四种解法 暴力法、动态规划、贪心法和分治法 图示讲解的动画演示。

# 代码实现

```ts
function maxSubArray(nums: number[]): number {
  const dp = [...nums];
  for (let i = 1; i < nums.length; i++) {
    // 要么自成一段，要么和前面子数组合并
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  return Math.max(...dp);
}
```

作者：zxhnext
链接：https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-dp-by-zxhnext-4geh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
