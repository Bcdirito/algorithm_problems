def two_sum(ints, s)
    # create a history hash
    # this object will be used for its key-value pairs.
    # the key will be the difference and the value will be the index
    history = Hash.new

    # iterate through the integers array
    ints.each do |i|
      if history[i] != nil
        # if a key of int exists in our history, a pair exists
        # return an array with the original index first and the curretn index second
        return [history[i], i]
      else
        # if no key exists get the difference of the sum and index
        difference = s - i

        # create a key-value pair with the difference as the key
        # you want the difference to be the key because is what should be appearing later in the array
        # set the value to the index
        history[difference] = i
      end
    end
    
    return "No Pair Sum"
end