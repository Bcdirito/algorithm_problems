def halves_are_alike(s)
    mid_idx = s.length / 2
    split_str = s.split("")
    first = split_str[0...mid_idx]
    second = split_str[mid_idx..-1]
    vowel_hash = {}
    
    "aeiouAEIOU".split("").each {|chr| vowel_hash[chr] = ""}
    
    first.select {|char| !vowel_hash[char].nil?}.length == second.select {|char| !vowel_hash[char].nil?}.length
end