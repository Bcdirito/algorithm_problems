# Runtime 36 ms, Memory Usage 9.4 MB

def to_goat_latin(s)
    # split the string by word
    split_str = s.split()

    # declare a variable of vowels
    # we will use this to check the first letter of each word
    vowels = "aeiou"

    # declare an empty array
    # this will hold all of our goat words
    goat_arr = []
    
    # iterate through the split string array with the index
    split_str.each_with_index do |word, idx|
        # declare an empty string variable
        goat_word = ""

        # check if the first letter is a vowel
        if vowels.include?(word[0].downcase)
            # if so declare a variable where the value is the word plus "ma" at the end
            goat_word = word + "ma"
        else
            # if not, create a goat word by
            # starting with a subtring starting at the second character
            # adding the first character to that
            # then tacking on "ma" at the end
            goat_word = word[1..-1] + word[0] + "ma"
        end

        # run a loop based on which word it is in the sentence
        # this is equal to 1 more than the current index
        (idx + 1).times do
            # add "a" to the end of the word
            goat_word += "a"
        end

        # push the word into the goat array
        goat_arr << goat_word
    end
    
    # convert the goat array to a string separated by a space and return it
    goat_arr.join(" ")
end