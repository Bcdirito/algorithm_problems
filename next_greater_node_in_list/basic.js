const nextLargerNodes = function(head) {
    let finalAnswer = []
    
    const findNextGreatest = (val, next) => {
        if (next.val > val) return next.val
        else if (next.next !== null) return findNextGreatest(val, next.next)
        else return 0
    }
    
    const iterateThroughList = (node) => {
        if (node.next !== null) {
            finalAnswer.push(findNextGreatest(node.val, node.next))
            iterateThroughList(node.next)
        }
    }
    
    iterateThroughList(head)
    finalAnswer.push(0)
    
    return finalAnswer
};