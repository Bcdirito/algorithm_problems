def find_max_consecutive_ones(nums)
    current_count = 0
    max_count = 0
    
    nums.each do |num|
        if num == 1
            current_count += 1
        else
            if current_count > max_count
                max_count = current_count
            end
            current_count = 0
        end
    end
    
    max_count > current_count ? max_count : current_count
end