# Runtime 28 ms, Memory Usage 10 MB

def reverse_list(head)
    # check if the head or a second node exist
    # if neither exist, return the head, as the list cannot be reversed and will be the same as before
    if head == nil or head.next == nil 
        return head
    end
    
    # define a helper method that takes in a node and an array
    # this method will grab all of the values in the linked list
    def get_all_vals(node, arr)
        # add the value of the node to the array
        arr << node.val
        
        # using a ternary operator, check if there is another node in the list
        # if so, recursively run the function again
        # if not, return the array
        return node.next ? get_all_vals(node.next, arr) : arr
    end
    
    # define a second helper method that takes in a node, array, and index
    # this will traverse the list and allow us to reverse the linked list
    def traverse_list(node, arr, idx)
        # set the current element in the array as the value of the node
        node.val = arr[idx]

        # increment the idx by one
        idx += 1
        
        # if the index number is less than the length of the array we still have node values to reverse
        # recursively run the function with the next node, the array, and the incremented index
        if idx < arr.length 
            traverse_list(node.next, arr, idx)
        end
    end
    
    # chain together the two helper methods by setting the array value in the second method as the reversed return value of the first helper method
    traverse_list(head, get_all_vals(head, []).reverse, 0)
    
    # implicit return
    head

end