---
title: 有效的括号
date: 2021-05-13
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串 s ，判断字符串是否有效。

<!-- more -->

# 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。



示例 1：

```
输入：s = "()"
输出：true
示例 2：
```

```
输入：s = "()[]{}"
输出：true
示例 3：
```

```
输入：s = "(]"
输出：false
示例 4：
```

```
输入：s = "([)]"
输出：false
示例 5：
```

```
输入：s = "{[]}"
输出：true
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 解题思路

借鉴了国际站的实现思路，遍历字符串时，匹配到左括号时是将其相应的右括号进行了压栈，遇到右括时判断和栈顶元素是否相等即可，最后判断栈是否为空

代码

```ts
let map: { [key: string]: string } = {
  "{": "}",
  "(": ")",
  "[": "]",
};
function isValid(s: string): boolean {
  let stack: string[] = [];
  let top: string | undefined;
  for (let char of s) {
    let value;
    if ((value = map[char])) {
      stack.push(value);
    } else {
      top = stack.pop();
      if (top !== char) {
        return false;
      }
    }
  }
  return !stack.length;
}
```

作者：li-li-h4
链接：https://leetcode-cn.com/problems/valid-parentheses/solution/zui-kuai-yun-xing-52msyun-xing-100nei-cun-100-by-l/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
