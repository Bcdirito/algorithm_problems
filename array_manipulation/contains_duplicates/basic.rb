def contains_duplicate(nums)
    hash = {}
    
    nums.each do |n|
        if hash[n].nil?
            hash[n] = ""
        else
            return true
        end
    end
    
    return false
end