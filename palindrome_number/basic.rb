# Runtime 196 ms, Memory Usage 9.9 MB

def is_palindrome(x)
    # convert the input x into a string
    # split the string into an array of characters
    split = x.to_s.split("")

    # declare a counter
    i = 1

    # iterate through the array
    split.each do |s|
        # if the current element is equal to the corresponding element on the opposite end of the array, increase the counter by 1
        if s == split[-i]
            i += 1
        else
            # if not, it is not a palindrome, so return false
            return false
        end
    end

    # if you made it through the array, it's a valid palindrome number
    true
end