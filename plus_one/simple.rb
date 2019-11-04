# Runtime 36ms, Memory Usage 9.7 MB

def plus_one(digits)
    # join the argument array to a single string
    # convert that string to an integer
    # increment the integer by 1
    int = digits.join.to_i + 1

    # convert the interger back into a string
    # split that string into an array
    strArr = int.to_s.split("")

    # map over the string array
    # convert each index to an integer
    # return the new integer array
    strArr.map {|s| s.to_i}
end