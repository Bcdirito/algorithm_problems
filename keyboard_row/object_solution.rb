def find_words(words)
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
    
    words.each do |word|
        lower_word = word.downcase
        row_value = char_rows[lower_word[0].to_sym]
        lower_word.split("").each_with_index do |char, idx|
            if char_rows[char.to_sym] == row_value
                if idx == word.length - 1
                    single_row_words << word
                end
            else
                break
            end
        end
    end
    
    single_row_words
end