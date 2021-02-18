# Runtime 292 ms, Memory Usage 18.9 MB
def maxLevelSum(root):
    # declare a helper method that traverses the tree
    # it takes in the leaf and the level
    # key: level
    # value: values of level
    def traverseTree(leaf, lvl):
        if lvl in level_dict:
            level_dict[lvl].append(leaf.val)
        else:
            level_dict[lvl] = [leaf.val]
    
        if (leaf.left):
            traverseTree(leaf.left, lvl+1)
        if (leaf.right):
            traverseTree(leaf.right, lvl+1)
    
    # declare a dictionary
    level_dict = {}

    # call the helper method
    traverseTree(root, 1)
    
    # declare two variables
    # one to hold the level of the max val
    # a second to hold the max val
    max_level = 0
    max_val = -9999
    
    # iterate through the dictionary
    # compare sum against max val
    # if greater, replace max level and val with sum
    for key in level_dict:
        level_sum = sum(level_dict[key])
        if level_sum > max_val:
            max_level = key
            max_val = level_sum
    
    return max_level