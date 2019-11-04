# Runtime 348 ms, Memory Usage 14 MB

def first_uniq_char(s)
    # declare a history object with default values of 0
    # this gets rid of the need for an if/else statement in our iterator
    history = Hash.new(0)

    # split the input string into an array of characters
    split = s.split("")

    # for each element, add 1 to the corresponding key in the history array
    split.each {|i| history[i] += 1}

    # iterate through the split array again
    # use .find to return the first unique key in our history object
    # the unique key is a key with a value of one
    unique = split.find {|c| history[c] == 1}

    if unique
        # if a unique key was found, return the index of that key in the array
        return split.index(unique)
    else
        # else return -1
        return -1
    end
end