def reverse_vowels(s)
    split_s = s.split("")
    vowel_hash = {"a": "", "e": "", "i": "", "o": "", "u": ""}
    final_string = ""
    counter = -1
    
    vowels = split_s.select {|char| !vowel_hash[char.downcase.to_sym].nil?}

    split_s.each do |char|
        if vowel_hash[char.downcase.to_sym].nil?
            final_string += char
        else
            final_string += vowels[counter]
            counter -= 1
        end
    end
    
    return final_string
end