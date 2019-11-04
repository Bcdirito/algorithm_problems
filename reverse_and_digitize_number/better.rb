def digitize(n)
    # convert the number to a string
    # reverse the string
    # split the string into an array
    split_str = n.to_s.reverse.split("")

    # declare an empty array variable
    # this array will contain our digitize integers
    int_arr = []
    
    # iterate through the split string
    # convert each character to an integer
    # push that integer into the array
    split_str.each {|i| int_arr << i.to_i}
    
    # implicit return
    int_arr
end