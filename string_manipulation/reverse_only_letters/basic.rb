# Runtime 36 ms, Memory Usage 9.5 MB

def reverse_only_letters(s)
    # declare three variables
    # the first is an empty hash
    # the second is the string argument split by character
    # the third is an empty string that will ultimately be what we return
    alpha_hash = {}
    split_str = s.split("")
    rev_str = ""
    
    # create a key value pair for every lower case and upper case letter
    # the value of the key isn't important, so whatever you choose just needs to match our boolean statement in the final iteration
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").each {|char| alpha_hash[char] = 1}
    
    # iterate through the split_str variable utilizing .select
    # return any alphabetic character
    char_arr = split_str.select {|char| alpha_hash[char]}
    
    # iterate through the split_str variable a second time
    # using a ternary operator determine if the letter is not an alphabetic character
    # if it is not, push the character into the end of the string
    # if it is, utilzing .pop, push the final character of the char_arr variable into the string
    split_str.each {|char| alpha_hash[char] != 1 ? rev_str += char : rev_str += char_arr.pop}
    
    # implicit return
    rev_str
end