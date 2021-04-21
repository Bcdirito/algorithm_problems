def reverse_vowels(s)
    split_vowels = "aeiouAEIOU".split("")
    history = {}
    final_string = ""

    split_vowels.each {|char| history[char] = ""}

    vowels = s.split("").select {|char| !history[char].nil?}
    
    s.split("").each do |char|
        if history[char].nil?
            final_string += char
        else
            final_string += vowels.pop()
        end
    end
    
    return final_string
end