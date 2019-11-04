# Runtime 36ms, Memory Usage 9.4 MB

def find_words(words)
    # declare an empty array
    # this will contain all of our single row words
    single_row_words = []
    
    # declare an array of the top row characters
    top_row = "qwertyuiop".split("")

    # declare an array of the mid row characters
    mid_row = "asdfghjkl".split("")

    # declare an array of the bottom row characters
    bottom_row = "zxcvbnm".split("")
    
    # declare a helper function
    # the parameters are the word
    # the word the first character is found in
    # the array of single words
    def row_checker(word, row, single_row)
        # split the word into an array
        # iterate through the split word array with the index
        word.split("").each_with_index do |char, idx|
            # check if the row contains the character
            if row.include?(char.downcase)
                    # if the row contains the character, check the index
                    # if the last index, push the word into the single row word array 
                    if idx == word.length - 1
                        single_row << word
                    end
            else
                # if the character isn't in the row, break out of the loop
                break
            end
        end
    end
    
    # iterate through the words array
    words.each do |word|
        # check the row the first character is found in
        # run the row_checker method for that word and row
        if top_row.include?(word[0].downcase)
            row_checker(word, top_row, single_row_words)
        elsif mid_row.include?(word[0].downcase)
            row_checker(word, mid_row, single_row_words)
        else
            row_checker(word, bottom_row, single_row_words)
        end
    end
    
    # return the single_row_words array
    single_row_words
end