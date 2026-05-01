/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    mergeTwoLists(list1, list2) {
        let node = { val: 0, next: null };
        const head = node;

        while (list1 && list2) {
            const newNode = { val: 0, next: null };

            if (list1.val < list2.val) {
                newNode.val = list1.val;
                list1 = list1.next;
            } else {
                newNode.val = list2.val;
                list2 = list2.next;
            }

            node.next = newNode;
            node = node.next;
        }

        if (list1) {
            node.next = list1;
        } else {
            node.next = list2;
        }
        
        return head.next;
    }
}
