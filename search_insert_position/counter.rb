def search_insert(nums, target)    
    i = -1
    
    nums.each do |n|
        i += 1
        if n >= target
            return i
        end
    end
    
    return nums.length
end