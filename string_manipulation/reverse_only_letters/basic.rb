def reverse_only_letters(s)
    alpha_hash = {}
    split_str = s.split("")
    rev_str = ""
    
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").each {|char| alpha_hash[char] = 1}
    
    rev_char_arr = split_str.select {|char| alpha_hash[char]}
    
    
    split_str.each {|char| alpha_hash[char] != 1 ? rev_str += char : rev_str += rev_char_arr.pop}
    
    rev_str
end