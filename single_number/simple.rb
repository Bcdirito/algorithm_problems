# Runtime 44 ms, Memory Usage 11 MB

def single_number(nums)
    # declare a new history hash
    # using this syntax we won't need an if else statement in our iterator
    # new keys instantiate with a value of 1
    history = Hash.new(0)
    
    # iterate through the nums array
    # increment the value of the key of the current element by 1
    nums.each {|num| history[num] += 1}

    # iterate through the history hash
    # find the key with a value of 1
    # return that key
    return history.select do |k, v|
        if v == 1
            return k
        end
    end
end