---
title: 搜索插入位置
date: 2021-10-17
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
>
> 请必须使用时间复杂度为 O(log n) 的算法。

<!-- more -->

# 35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0

提示:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为无重复元素的升序排列数组
-104 <= target <= 104

# 解题思路

题目要求使用时间复杂度为 O(log n) 的算法， 也就表明需要使用二分法。主要需要处理找不到元素的情况，一般二分搜索找不到返回-1，而此题需要我们返回查找元素的下标，即 left 或者 right + 1

代码

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  // while的退出条件为 left <= right，即如果while退出的时候还没找到元素，
  // 那么left已经移动到了该元素应该存在的位置，或者right+1就是该元素应该
  // 存在的位置
  // return (right + 1)
  return left;
}
```

作者：verten
链接：https://leetcode-cn.com/problems/search-insert-position/solution/er-fen-sou-suo-zhu-yao-chu-li-dian-zai-y-r9wh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
