def first_uniq_char(s)
    total_hash = Hash.new(0)
    first_idx_hash = {}
    
    s.split("").each_with_index do |char, idx|
        total_hash[char] += 1
        if total_hash[char] == 1
            first_idx_hash[char] = idx
        else
            first_idx_hash.delete(char)
        end
    end
    
    return !first_idx_hash.empty? ? first_idx_hash[first_idx_hash.keys.first] : -1
end