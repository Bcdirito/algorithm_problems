# Runtime 92 ms, Memory Usage 15 MB

def is_palindrome(s)
    # initialize an empy hash variable
    letter_hash = {}
    
    # split a string of every alphanumeric character
    # create a key value pair for each character, where the value is 0
    "abcdefghijklmnopqrstuvwxyz0123456789".split("").each {|char| letter_hash[char] = 0}
    
    # split the input string, then iterate through the string using .select
    # filter out non alphanumeric characters by checking if they have a key in the hash variable
    # only accept characters with keys
    filter_arr = s.downcase.split("").select {|char| letter_hash[char]}
    
    # iterate through the first half of the filtered array, which you get by using the exclusive ... operator
    # use .each_with_index so we have the index to iterate backward through second half
    # check if characters are equal
    # if not, return false
    filter_arr[0...filter_string.length/2].each_with_index do |char, idx|
        if char != filter_string[-(idx+1)]
            return false
        end
    end
    
    # if you made it here, the strings are equal
    # implicit return true
    true
end