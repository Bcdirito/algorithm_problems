def maxLevelSum(root):
    level_dict = {}
    
    def traverseTree(leaf, lvl):
        if lvl in level_dict:
            level_dict[lvl].append(leaf.val)
        else:
            level_dict[lvl] = [leaf.val]
    
        if (leaf.left):
            traverseTree(leaf.left, lvl+1)
        if (leaf.right):
            traverseTree(leaf.right, lvl+1)
    
    traverseTree(root, 1)
    
    max_level = 0
    max_val = -9999
    
    for key in level_dict:
        level_sum = sum(level_dict[key])
        if level_sum > max_val:
            max_level = key
            max_val = level_sum
    
    return max_level