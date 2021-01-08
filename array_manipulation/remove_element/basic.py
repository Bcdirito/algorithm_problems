def removeElement(nums, val):
    def delete_element(lst):
        deleted = False
        for l in range(len(lst)):
            if lst[l] == val:
                deleted = True
                lst.pop(l)
                break
        
        return lst if deleted == False else delete_element(lst)
        
            
    
    return len(delete_element(nums))