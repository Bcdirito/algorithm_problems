def third_max(nums)
    top_max = nil
    second_max = nil
    third_max = nil
    
    uniques = nums.uniq
    
    uniques.each do |u|
        if top_max.nil? || u > top_max
            third_max = second_max
            second_max = top_max
            top_max = u
        elsif second_max.nil? || u > second_max
            third_max = second_max
            second_max = u
        elsif third_max.nil? || u > third_max
            third_max = u
        end
    end
    
    return uniques.length > 2 ? third_max : top_max
end