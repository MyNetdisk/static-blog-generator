---
title: 数字的补数
date: 2021-10-18
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。

<!-- more -->

# 476. 数字的补数

对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。

例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
给你一个整数 num ，输出它的补数。

示例 1：

输入：num = 5
输出：2
解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
示例 2：

输入：num = 1
输出：0
解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。



提示：

1 <= num < 231

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-complement
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 解题思路

此处撰写解题思路

代码

```ts
function findComplement(num: number): number {
  const str = num.toString(2);
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (+str[i]) {
      s += "0";
    } else {
      s += "1";
    }
  }
  return parseInt(s, 2);
}
```

作者：yakangqin
链接：https://leetcode-cn.com/problems/number-complement/solution/shu-zi-de-bu-shu-by-yakangqin-9mh2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
