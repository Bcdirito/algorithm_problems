# Runtime 44 ms, Memory Usage 10.4 MB

def top_k_frequent(nums, k)
    # initialize an empty hash
    # set a default value of 0 for each key
    history = Hash.new(0)
    
    # iterate through the input array
    # increment each key by one
    nums.each {|i| history[i] += 1}
    
    # sort the hash by value into an array
    sorted_history = history.sort_by {|k, v| v}
    
    # get a slice of the array of the last k elements
    # map through the array grabbing the first of each array
    # return the map
    sorted_history[-k..-1].map {|i| i.first}
end