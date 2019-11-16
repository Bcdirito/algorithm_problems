def digitize(n)
    # convert the number to a string
    # split the string into an array
    split_str = n.to_s.split("")

    # declare an empty array variable
    int_arr = []


    # iterate through the string array
    split_str.each do |i|
        # convert each index to an integer
        num = i.to_i

        # add the integer to the beginning of the array
        int_arr.unshift(num)
    end
    
    # return the array of numbers
    return int_arr
end