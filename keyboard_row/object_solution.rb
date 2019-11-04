# Runtime 36 ms, Memory Usage 9.4 MB

def find_words(words)
    # define an object where characters are the key and their rows are the value
    # the top row value is 1
    # the mid row value is 2
    # the bottom row value is 3
    char_rows = {
            "q": 1,
            "w": 1,
            "e": 1,
            "r": 1,
            "t": 1,
            "y": 1,
            "u": 1,
            "i": 1,
            "o": 1,
            "p": 1,
            "a": 2,
            "s": 2,
            "d": 2,
            "f": 2,
            "g": 2,
            "h": 2,
            "j": 2,
            "k": 2,
            "l": 2,
            "z": 3,
            "x": 3,
            "c": 3,
            "v": 3,
            "b": 3,
            "n": 3,
            "m": 3
        }
    
    # define an empty array variable
    # this array will contain are single row words
    single_row_words = []
    
    # iterate through the words array
    words.each do |word|
        # convert the word to lower case, since our keys are lower cased
        lower_word = word.downcase

        # get the value of the first character
        # in order to be read by the object, that character must be converted to a symbol
        # to do that in ruby, use .to_sym
        row_value = char_rows[lower_word[0].to_sym]

        # split the lower cased word and iterate through it with the index
        lower_word.split("").each_with_index do |char, idx|
            # use row values to check if the character is in the same row
            if char_rows[char.to_sym] == row_value
                # if so, check if the current character is the last character by using the index
                if idx == word.length - 1
                    # if it is, push the original word into the single row words array
                    single_row_words << word
                end
            else
                # if character not found in the row, break out of the iterator
                break
            end
        end
    end
    
    # return the single_row_words array
    single_row_words
end