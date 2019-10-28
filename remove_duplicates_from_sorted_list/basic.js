const deleteDuplicates = (head) => {    
    const getValue = (node) => {
        if (node !== null && node.next !== null) {
            if (node.val === node.next.val) {
                node.next = node.next.next
                getValue(node)
            } else {
                getValue(node.next)
            }
        }
    }
    
    getValue(head)
    
    return head
};