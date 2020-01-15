class Solution:
    def averageOfLevels(self, root: TreeNode):
        # initialize two variables
        # the first is an empty dictionary, to hold all of the values by level
        # the second will be a list for all of the averages
        level_vals_dict = {}
        averages = []
        
        # declare a helper method that takes in a node and a level number
        # we will use this to traverse the tree, grab all the values, and put them into the appropriate array
        def traverse_tree(node, level):
            # check if the level exists as a key in the dictionary
            # if so add the node's value to that key's list
            # if not create a key/value pair where the key is the level and the value is a list of that level's node's values
            if level in level_vals_dict:
                level_vals_dict[level].append(node.val)
            else:
                level_vals_dict[level] = [node.val]
            
            # check if there are left and right child nodes
            # if so, recursively run the method with that respective child and the level variable increased by one
            if node.left:
                traverse_tree(node.left, level+1)
            
            if node.right:
                traverse_tree(node.right, level+1)
        
        # run the helper method
        traverse_tree(root, 1)
        
        # iterate through the dictionary
        for d in level_vals_dict:
            # for each value in the dictionary get the sum of the list
            # then divide that sum by the length of the list to get the average
            # finish by appending the average to the averages list
            averages.append(sum(level_vals_dict[d])/len(level_vals_dict[d]))

        # return the averages
        return averages