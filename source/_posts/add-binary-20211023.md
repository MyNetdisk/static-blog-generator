---
title: 二进制求和
date: 2023/06/28 09:50:40
category: LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> tip:
> 给你两个二进制字符串，返回它们的和（用二进制表示）。
>
> 输入为 非空 字符串且只包含数字  1  和  0。

<!-- more -->

# 67. 二进制求和

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字  1  和  0。

示例  1:

输入: a = "11", b = "1"
输出: "100"

示例  2:

输入: a = "1010", b = "1011"
输出: "10101"

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 代码

```ts
function addBinary(a, b) {
  let carry = 0;
  let i = 0;
  let arr = [];
  let maxLength = Math.max(a.length, b.length);
  let aMaxIndex = a.length - 1;
  let bMaxIndex = b.length - 1;

  while (i < maxLength) {
    let ac = Number(a[aMaxIndex - i]) || 0;
    let bc = Number(b[bMaxIndex - i]) || 0;

    let newValue = ac + bc + carry;
    carry = newValue > 1 ? 1 : 0;
    arr.push(newValue % 2);
    i++;
  }

  carry && arr.push(1);

  return arr.reverse().join("");
}
```

作者：jin-ming-ji
链接：https://leetcode-cn.com/problems/add-binary/solution/ts-100beatjie-fa-by-jin-ming-ji-ztie/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
