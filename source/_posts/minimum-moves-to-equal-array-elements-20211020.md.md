---
title: 最小操作次数使数组元素相等
date: 2023/06/28 09:50:40
category: LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

<!-- more -->

# 453. 最小操作次数使数组元素相等

给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

示例 1：

输入：nums = [1,2,3]
输出：3
解释：
只需要 3 次操作（注意每次操作会增加两个元素的值）：
[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]

示例 2：

输入：nums = [1,1,1]
输出：0

提示：

n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109
答案保证符合 32-bit 整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 思路和算法

方法一：数学
因为只需要找出让数组所有元素相等的最小操作次数，所以我们不需要考虑数组中各个元素的绝对大小，即不需要真正算出数组中所有元素相等时的元素值，只需要考虑数组中元素相对大小的变化即可。

因此，每次操作既可以理解为使 n-1n−1 个元素增加 11，也可以理解使 11 个元素减少 11。显然，后者更利于我们的计算。

于是，要计算让数组中所有元素相等的操作数，我们只需要计算将数组中所有元素都减少到数组中元素最小值所需的操作数，即计算

$$
\sum_{i=0}^{n-1} \textit{nums}[i] - min(\textit{nums}) * n
$$

其中 nn 为数组 \textit{nums}nums 的长度，\textit{min}(\textit{nums})min(nums)为数组 \textit{nums}nums 中元素的最小值。

在实现中，为避免溢出，我们可以逐个累加每个元素与数组中元素最小值的差，即计算

$$
\sum_{i=0}^{n-1} (\textit{nums}[i] - \textit{min}(\textit{nums}))
$$

代码

```js
var minMoves = function (nums) {
  const minNum = Math.min(...nums);
  let res = 0;
  for (const num of nums) {
    res += num - minNum;
  }
  return res;
};
```

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/solution/zui-xiao-cao-zuo-ci-shu-shi-shu-zu-yuan-3meg3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
