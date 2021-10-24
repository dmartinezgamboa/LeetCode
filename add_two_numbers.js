/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
    let newHead = {val: 0, next: null}
    let tempNode = newHead;
    let hold = 0;
    let templ1 = l1;
    let templ2 = l2;

    while (templ1 != null || templ2 != null || hold != 0) { 
        
        tempNode.val = ((templ1 == null ? 0 : templ1.val) // add zero if undefined
                       + (templ2 == null ? 0 : templ2.val) 
                       + hold); 
        hold = 0;
        
        if (tempNode.val >= 10) { // store remainder if exists
            tempNode.val = tempNode.val - 10;
            hold = 1;
        }
        
        if (templ1 != null) {
            templ1 = templ1.next;
        }

        if (templ2 != null) {
            templ2 = templ2.next;
        }
        
        if (templ1 != null || templ2 != null || hold != 0) {
            tempNode.next = {val: 0, next: null}; 
            tempNode = tempNode.next;
        }
        
    }
    return newHead;
};