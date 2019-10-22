def top_k_frequent(nums, k)
    history = Hash.new(0)
    
    nums.each {|i| history[i] += 1}
    
    sorted_history = history.sort_by {|k, v| v}
    
    return sorted_history[-k..-1].map {|i| i.first}
end