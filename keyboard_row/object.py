def findWords(self, words):
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
    
    single_row_words = []
    row_val = 0
    
    for word in words:
        lower_word = word.lower()
        row_val = char_rows[lower_word[0]]
        counter = 0
        for char in lower_word:
            counter += 1
            if char_rows[char] == row_val:
                if counter == len(lower_word):
                    single_row_words.append(word)
            else:
                break
    
    return single_row_words