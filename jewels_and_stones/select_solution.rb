def num_jewels_in_stones(j, s)
    total = 0
    
    j.split("").each do |char|
       if s.include?(char)
           total += s.split("").select do |s_char| 
               s_char == char
           end.length
       end
    end
    
    total
end