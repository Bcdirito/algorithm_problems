class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if head == None or head.next == None:
            return True
        
        def get_vals(node, lst):
            lst.append(node.val)
            
            if node.next:
                return get_vals(node.next, lst)
            else:
                return lst
            
        all_vals = get_vals(head, [])
        
        return all_vals == all_vals[::-1]