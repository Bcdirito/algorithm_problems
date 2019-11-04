# Runtime 204 ms, Memory Usage 9.7 MB

def is_palindrome(x)
    # interpolate x to make it a string
    string = "#{x}"
    
    # declare an empty reverse string variable
    reverse = ""

    # split the string of x into an array
    # for each element in array, add to the beginning of the reverse string variable
    # this creates a reverse of the string of x
    string.split("").each {|s| reverse = s + reverse}

    # compare if string and reverse are equal
    # return boolean
    string == reverse
end