def num_jewels_in_stones(j, s)
    total = 0
    
    j.split("").each do |char|
       if s.include?(char)
           s.split("").each do |s_char|
               if s_char == char
                   total += 1
               end
           end
       end
    end
    
    total
end