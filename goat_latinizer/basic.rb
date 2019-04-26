def to_goat_latin(s)
    split_str = s.split()
    vowels = "aeiou"
    goat_arr = []
    
    split_str.each_with_index do |word, idx|
        goat_word = ""
        if vowels.include?(word[0].downcase)
            goat_word = word + "ma"
        else
            goat_word = word[1..-1] + word[0] + "ma"
        end
        (idx + 1).times do
            goat_word += "a"
        end
        goat_arr << goat_word
    end
    
    goat_arr.join(" ")
end