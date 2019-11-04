# Runtime 20 ms, Memory Usage 11.8 MB

def findWords(self, words):
    # define a dictionary where characters are the keys and their row is the value
    # the top row has a value of 1
    # the mid row has a value of 2
    # the bottom row has a value of 3
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
    
    # define an empty list variable
    # this will contain our single row words 
    single_row_words = []
    
    # iterate through the words list
    for word in words:
        # convert the word to lower case, since all of our keys are lower case
        lower_word = word.lower()

        # get the value of the row by checking the row of the first character
        row_val = char_rows[lower_word[0]]

        # reset the counter to 0
        counter = 0

        # iterate through the word
        for char in lower_word:

            # increment the counter by 1
            counter += 1

            # check if the current value is equal to the row value
            # if so the character is in the same row
            if char_rows[char] == row_val:
                # if the character is in the same row, check if it is the last index
                # if so, the counter will be equal to the length of the word
                if counter == len(lower_word):
                    # if the final character, append the word to the single row list
                    single_row_words.append(word)
            else:
                # if character not in the same row break out of the loop
                break
    
    # return the single row words list
    return single_row_words