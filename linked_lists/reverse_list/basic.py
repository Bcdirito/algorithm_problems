class Solution:
    def reverseList(self, head: ListNode):
        if head != None and head.next != None:
            def get_vals(node, lst):
                lst.append(node.val)

                if node.next: return get_vals(node.next, lst)
                else: return lst

            def rev_vals(node, lst):
                node.val = lst.pop()

                if node.next: rev_vals(node.next, lst)

            rev_vals(head, get_vals(head, []))
        
        return head