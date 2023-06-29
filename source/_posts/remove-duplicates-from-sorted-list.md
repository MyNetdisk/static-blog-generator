---
title: 删除排序链表中的重复元素
date: 2021-11-02
categories:
  - LeetCode
tags:
  - 数据结构与算法
cover: https://images.mynetdisk.vercel.app/vuepress/cover/WechatIMG11.png
---

> 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
>
> 返回同样按升序排列的结果链表。

<!-- more -->

# 83. 删除排序链表中的重复元素

存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。

示例 1：

输入：head = [1,1,2]
输出：[1,2]
示例 2：

输入：head = [1,1,2,3,3]
输出：[1,2,3]

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 思路

标签：链表

指定 cur 指针指向头部 head

当 cur 和 cur.next 的存在为循环结束条件，当二者有一个不存在时说明链表没有去重复的必要了

当 cur.val 和 cur.next.val 相等时说明需要去重，则将 cur 的下一个指针指向下一个的下一个，这样就能达到去重复的效果

如果不相等则 cur 移动到下一个位置继续循环

时间复杂度：O(n)

# 代码

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
```

作者：guanpengchn
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/solution/hua-jie-suan-fa-83-shan-chu-pai-xu-lian-biao-zhong/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
