def reverse_list(head)
    
    if head == nil or head.next == nil 
        return head
    end
        
    def get_all_vals(node, arr)
        arr << node.val
        
        return node.next ? get_all_vals(node.next, arr) : arr
    end
    
    def traverse_list(node, arr, idx)
        node.val = arr[idx]
        idx += 1
        
        if idx < arr.length 
            traverse_list(node.next, arr, idx)
        end
    end
    
    traverse_list(head, get_all_vals(head, []).reverse, 0)
    
    head
    
end