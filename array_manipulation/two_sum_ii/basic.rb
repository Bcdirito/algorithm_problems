def two_sum(numbers, target)
    numbers_hash = {}
    
    numbers.each_with_index {|num, idx| numbers_hash[target-num] = idx+1}
    
    numbers.each_with_index do |num, idx|
        if numbers_hash[num]
            return [numbers_hash[num], idx+1].sort
        end
    end
end