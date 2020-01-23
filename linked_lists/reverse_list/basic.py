# Runtime 48 ms, Memory Usage 18.4 MB:

class Solution:
    def reverseList(self, head: ListNode):
        # check if there is a list or if that list is only a length of one node
        # if it is, run the reverse logic and if not, skip to the end
        if head != None and head.next != None:
            # define a helper method that takes in a node and a list
            # this method returns all the values of the linked list
            def get_vals(node, lst):
                # append the value of the node to the list
                lst.append(node.val)

                # if there is another lode, recursively run the method again
                # if not, return the list
                if node.next: return get_vals(node.next, lst)
                else: return lst

            # define a second helper method, also taking in a node and a list
            # this will reverse the values of the linked list
            def rev_vals(node, lst):
                # set the value of the current node to the last value in the list
                node.val = lst.pop()

                # if there is another node, recursively run the method again
                if node.next: rev_vals(node.next, lst)

            # call the second helper method, with the list argument being the retun value of the first helpre method
            rev_vals(head, get_vals(head, []))
        
        # return the linked list
        return head