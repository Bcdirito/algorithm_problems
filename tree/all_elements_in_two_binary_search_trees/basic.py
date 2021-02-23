def getAllElements(root1, root2):
    def traverse_tree(node):
        vals.append(node.val)
        
        if (node.left): 
            traverse_tree(node.left)
        if (node.right):
            traverse_tree(node.right)
    
    vals = []
    
    if (root1):
        traverse_tree(root1)
    if (root2):
        traverse_tree(root2)
    
    return list(sorted(vals))