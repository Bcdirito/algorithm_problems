# Runtime 76 ms, Memory Usage 75.4 MB

class Solution:
    def isPalindrome(self, head: ListNode):
        # check if there is no head or only the head
        # if so, this is automatically a palindrome, so return True
        if head == None or head.next == None:
            return True
        
        # define a helper function that takes in a node and a list
        # this will grab the values of the linked list
        def get_vals(node, lst):
            # add the node's value to the end of the list
            lst.append(node.val)
            
            # check if there is another node in the list
            # if so, recursively run the function again
            # if not return the list
            if node.next:
                return get_vals(node.next, lst)
            else:
                return lst
        
        # run the helper function and save the list to a variable
        all_vals = get_vals(head, [])
        
        # return the boolean value created from checking the list versus the reversed list
        return all_vals == all_vals[::-1]