# @param {String[]} words
# @return {String[]}
def find_words(words)
    single_row_words = []
    
    top_row = "qwertyuiop".split("")
    mid_row = "asdfghjkl".split("")
    bottom_row = "zxcvbnm".split("")
    
    def row_checker(split_word, row, single_row, orig_word)
       split_word.each_with_index do |char, idx|
          if row.include?(char)
                if idx == split_word.length - 1
                  single_row << orig_word
                end
          else
              break
          end
       end
    end
    
    words.each do |word|
        lower_word = word.downcase
        if top_row.include?(lower_word[0])
            row_checker(lower_word.split(""), top_row, single_row_words, word)
        elsif mid_row.include?(lower_word[0])
            row_checker(lower_word.split(""), mid_row, single_row_words, word)
        else
            row_checker(lower_word.split(""), bottom_row, single_row_words, word)
        end
    end
    
    single_row_words
end