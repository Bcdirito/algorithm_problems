class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        level_vals_dict = {}
        averages = []
        
        def traverse_tree(node, level):
            if level in level_vals_dict:
                level_vals_dict[level].append(node.val)
            else:
                level_vals_dict[level] = [node.val]
            
            if node.left:
                traverse_tree(node.left, level+1)
            
            if node.right:
                traverse_tree(node.right, level+1)
        
        def get_level_average(lst):
            list_sum = 0
            
            for l in lst:
                list_sum += l
            
            return list_sum / len(lst)
        
        traverse_tree(root, 1)
        
        for d in level_vals_dict:
            averages.append(get_level_average(level_vals_dict[d]))
            
        return averages