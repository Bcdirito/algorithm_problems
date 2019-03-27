def search_insert(nums, target)
    nums.each do |n|
        if n >= target
            return nums.index(n)
        end
    end

    return nums.length
end