def high(x)
    # split the string by word into an array so we may iterate through it
    split_x = x.split(" ")

    # declare an empty hash
    # initialize each key with a value of zero to cut out an extra step when we iterate later
    word_hash = Hash.new(0)

    # declare a checker variable
    # since we are using ascii code, we need this checker to be one less than "a"
    # for the record, this value is 96
    checker = "a".ord - 1

    # declare an empty string
    # we will ultimately store our highest scoring word here
    highest_word = ""

    # declare a variable to use for our highest score
    # delcare it with zero so we may check every value with it
    highest_value = 0
    
    # iterate through the split_x array
    split_x.each do |word|
        # iterate through each individual character of each word
        # add the difference of the ascii code and the checker into the key
        word.split("").each {|c| word_hash[word] += c.ord - checker}
    end
    
    # iterate through the word hash
    word_hash.each do |k, v|
        # check if the current value is greater than the highest value variable
        if v > highest_value
            # if it is set the highest word to the key
            # and set the highest value to the value
            highest_word = k
            highest_value = v
        end
    end
    
    # implicit return
    highest_word
  end