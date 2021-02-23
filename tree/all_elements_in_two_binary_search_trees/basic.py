# Runtime 300 ms, Memory Usage 22.5 MB
def getAllElements(root1, root2):
    
    # declare a recursive helper method that takes in a node
    # this method will traverse through the tree
    def traverse_tree(node):
        vals.append(node.val)
        
        if (node.left): 
            traverse_tree(node.left)
        if (node.right):
            traverse_tree(node.right)
    
    # declare an empty list that will hold all of the values of the tree
    vals = []
    
    # check if both trees exist and iterate through them
    if (root1):
        traverse_tree(root1)
    if (root2):
        traverse_tree(root2)
    
    # return a sorted list of vals
    return list(sorted(vals))