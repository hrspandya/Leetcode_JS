import React from 'react';

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Better Solution and nice code
function solution2 (l1, l2) {
    var sum = 0;
    var carry = 0;
    var head = new ListNode(0);
    var result = head;
    
    while (l1 != null || l2 != null) {
        var l1Val = 0;
        var l2Val = 0;
        
        if (l1 != null) {
            l1Val = l1.value;
            l1 = l1.next;
        }
        
        if (l2 != null) {
            l2Val = l2.value;
            l2 = l2.next;
        }
        
        sum = l1Val + l2Val + carry;
        carry = parseInt(sum / 10, 10);
        var remainder = sum % 10;
        
        result.next = new ListNode(remainder);
        result = result.next;
    }
    
    if (carry > 0) {
        result.next = new ListNode(carry);
    }
    
    return head.next;
}

function solution1(list1, list2) {
    // while l1 and l2 both are not null
    // add value from l1 and l2,
    // find carry and remainder for each sum
    // while l1 is not null, continue adding
    // while l2 is not null, continue adding

    let sum = 0;
    let carry = 0;
    let l1 = list1;
    let l2 = list2;
    let finalResult = new ListNode(0);
    let result = finalResult;

    while(l1 != null && l2 != null) {
        sum = l1.value + l2.value + carry;
        carry = parseInt(sum / 10, 10);
        let remainder = sum % 10;

        if (result != null) {
            result.next = new ListNode(remainder);
            result = result.next;
        } else {
            result = new ListNode(remainder);
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1 != null) {
        sum = l1.value + carry;
        carry = parseInt(sum / 10, 10);
        let remainder = sum % 10;

        if (result != null) {
            result.next = new ListNode(remainder);
            result = result.next;
        } else {
            result = new ListNode(remainder);
        }
        
        l1 = l1.next;
    }

    while(l2 != null) {
        sum = l2.value + carry;
        carry = parseInt(sum / 10, 10);
        let remainder = sum % 10;

        if (result != null) {
            result.next = new ListNode(remainder);
            result = result.next;
        } else {
            result = new ListNode(remainder);
        }
        
        l2 = l2.next;
    }

    return finalResult.next;
}

class SolutionClass extends React.Component {
    render() {
        debugger;
        const list1 = new ListNode(2);
        list1.next = new ListNode(4);
        list1.next.next = new ListNode(3);
        console.log(list1);

        const list2 = new ListNode(5);
        list2.next = new ListNode(6);
        list2.next.next = new ListNode(4);

        const result = solution1(list1, list2);
        const result2 = solution2(list1, list2);
        return (
            <div className="problem">
                <div className="title">
                    Add Two Numbers
                </div>
                <pre>{`
                You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

                You may assume the two numbers do not contain any leading zero, except the number 0 itself.

                Example:

                Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
                Output: 7 -> 0 -> 8
                Explanation: 342 + 465 = 807.
                `}</pre>

                <div className="solution">
                    Solution1:  {JSON.stringify(result)}
                    <br />
                    <br />
                    Solution2:  {JSON.stringify(result2)}
                </div>
            </div>
        );
    }
}

export default SolutionClass;