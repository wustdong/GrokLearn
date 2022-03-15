import { printList, createList, ListNode, reverseLinkedList } from '../../utils.js';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
    //  L0 → L1 → … → Ln-1 → Ln 
    // 请将其重新排列后变为：
    // L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function(head) {
    console.log('初始的链表打印');
    printList(head);

     // 第一遍循环列表，找到中间位置
     let len = 0;
     let dummy = new ListNode(0, head);
     let cur = dummy;
     while(cur.next) {
        len++;
        cur = cur.next;
     }
     let half = Math.ceil(len / 2) - 1;

     // 第二步：将链表分为两部分
     let firstHalf = dummy.next;
     let secondHalf;
     cur = dummy.next;
     for(let i = 0; i < len; i++) {
        if(i === half) {
            secondHalf = cur.next; // 下半部分的链表头结点
            cur.next = null;
            break;
        }
        cur = cur.next;
    }

    console.log('分段后的链表,firstHalf:');
    printList(firstHalf);
    console.log('分段后的链表,secondHalf:')
    printList(secondHalf);

    // 第三步： 翻转afHalf 链表
    secondHalf = reverseLinkedList(secondHalf);
    console.log('分段后的翻转第二部分链表,secondHalf:');
    printList(secondHalf);

    // 第四步: 合并两个链表
    cur = firstHalf;
    let secCur = secondHalf;
    while(secCur) {
        let curTemp = cur.next;
        cur.next = secCur;
        let secCurTemp = secCur.next;
        secCur.next = curTemp;

        cur = curTemp;
        secCur = secCurTemp;
    }
    head = firstHalf;
    console.log('拼接后的链表：');
    printList(head);
    return head;

};

const head = createList([1,2,3,4]);
reorderList(head);