def is_palindrome(s)
    letter_hash = {}
    
    "abcdefghijklmnopqrstuvwxyz0123456789".split("").each {|char| letter_hash[char] = ""}
    
    filter_string = s.downcase.split("").select {|char| letter_hash[char]}
    filter_string_first = filter_string[0...filter_string.length/2]
    filter_string_second = filter_string[filter_string.length/2..-1]
        
    filter_string_first.each_with_index do |char, idx|
        if char != filter_string_second[-(idx+1)]
            return false
        end
    end
    
    true
end