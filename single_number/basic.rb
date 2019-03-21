def single_number(nums)
    history = Hash.new(0)
    
    nums.each {|num| history[num]}
    unique = history.select do |k, v|
        return v == 1
    end
    unique
end