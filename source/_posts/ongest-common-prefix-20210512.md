---
title: 最长公共前缀
date: 2023/06/28 09:50:40
category: LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 编写一个函数来查找字符串数组中的最长公共前缀。
>
> 如果不存在公共前缀，返回空字符串  ""。

<!-- more -->

# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串  ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

1.最长前缀相同，所以要遍历数组中元素最短的一个：x。

2.拿长度最短的元素 x 判断其它元素是否以它开始，如果都，则返回 x，程序结束。

3.如果有一个不是以它开始，则此次判断结束，然后取 x 的前 x.length-1 长度，重复 2 步骤。

3.如果有一个不是以它开始，则此次判断结束，然后取 x 的前 x.length-2 长度，重复 2 步骤。
.......

4.如果取的长度为 0，证明没有共同前缀，返回空字符串，程序结束

代码：

```js
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return "";
  }
  let min = strs[0];
  strs.forEach((item) => {
    if (item.length < min.length) {
      min = item;
    }
  });
  const minArr = min.split("");
  for (let i = minArr.length; i > 0; i--) {
    let pre = minArr.slice(0, i).join("");
    let has = 0;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].startsWith(pre)) {
        has++;
      } else {
        break;
      }
    }
    if (has === strs.length) {
      return pre;
    }
  }
  return "";
}
```

作者：iG15AMxcHo
链接：https://leetcode-cn.com/problems/longest-common-prefix/solution/typescriptzui-chang-qian-zhui-pan-duan-by-ig15amxc/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
