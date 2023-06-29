---
title: 最后一个单词的长度
date: 2021-10-22
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给你两个二进制字符串，返回它们的和（用二进制表示）。
>
> 输入为 非空 字符串且只包含数字  1  和  0。

<!-- more -->

# 58. 最后一个单词的长度

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例 1：

输入：s = "Hello World"
输出：5
示例 2：

输入：s = " fly me to the moon "
输出：4
示例 3：

输入：s = "luffy is still joyboy"
输出：6

提示：

1 <= s.length <= 104
s 仅有英文字母和空格 ' ' 组成
s 中至少存在一个单词

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 我写的代码

```ts
function lengthOfLastWord(s: string): number {
  const arr = s.split(" ");
  const filterArr = arr.filter((item, index) => item.length > 0);
  return filterArr[filterArr.length - 1].length;
}
```

方法一：反向遍历
题目要求得到字符串中最后一个单词的长度，可以反向遍历字符串，寻找最后一个单词并计算其长度。

由于字符串中至少存在一个单词，因此字符串中一定有字母。首先找到字符串中的最后一个字母，该字母即为最后一个单词的最后一个字母。

从最后一个字母开始继续反向遍历字符串，直到遇到空格或者到达字符串的起始位置。遍历到的每个字母都是最后一个单词中的字母，因此遍历到的字母数量即为最后一个单词的长度。

# 别人写的代码

```js
var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  while (s[index] === " ") {
    index--;
  }
  let wordLength = 0;
  while (index >= 0 && s[index] !== " ") {
    wordLength++;
    index--;
  }
  return wordLength;
};
```

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/length-of-last-word/solution/zui-hou-yi-ge-dan-ci-de-chang-du-by-leet-51ih/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
