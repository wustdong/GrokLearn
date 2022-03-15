/** 
 * 获取闭区间 [n, m] 内的一个随机整数
 * 算法应用： 洗牌算法
*/
// 说明：
// +--------------------------------------------------------------------------+
// | Math.random() 返回[0, 1)范围浮点数数值；                                    |
// | 这里我们需要得到的随机数范围是[n,m]                                           |
// | [0, m-n+1) +n --> [n, m+1)——>[n,m]                                       |
// |                                                                          |
// +--------------------------------------------------------------------------+
   
export function randOne(n, m) {                                                                                                                
    return Math.floor(Math.random() * (m - n + 1)) + n;                                                                                 
}

/**
 * 链表相关
 * @param {number}} val 
 * @param {*} next 
 */
export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
export  function createList(arr) {
    if(!arr.length) {
        console.log('当前传入参数有误，请输入数组')
        return;
    }
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++) {
        // console.log(arr[i]);
        let node = new ListNode(arr[i]);
        cur.next = node;
        cur = cur.next;
    }

    return head;
}
export  function printList(head) {
    if(!head) {
        return ;
    }
   let dummy = new ListNode(0, head);
   let cur = dummy.next;
   let printStr = '';
   while(cur) {
        printStr += cur.val+ (cur.next ? '->' : '');
        cur = cur.next;
   }
    console.log(printStr);
}

export function reverseLinkedList(head) {
    if(!head || !head.next) {
        return head;
    }

    let dummy = new ListNode();
    let pre = dummy;
    let mid = head;
    let end = head.next;

    while(1) {
        if(pre === dummy) { // 这里为了方便处理，初始化了一个头结点，但是ListNode 的默认val 为0，这里需要在初次翻转时处理一下
            mid.next = undefined;
        } else {
            mid.next = pre;
        }
        pre = mid;
        mid = end;

        if(!end.next) {
            mid.next = pre;
            break;
        }

        end = end.next;
    }

    head.next
    return mid;
}
// const arr = [1,2,3,4];
// const head = createList(arr);
// printList(head);
// const reverseHead = reverseLinkedList(head);
// printList(reverseHead);