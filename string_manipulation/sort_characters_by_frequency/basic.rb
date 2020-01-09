def frequency_sort(s)
    frequency_hash = Hash.new(0)
    sorted_string = ""
    
    s.split("").each {|char| frequency_hash[char] += 1}
    
    
    frequency_hash.sort_by {|k, v| -v}.each do |key|
       key[1].times do
           sorted_string += key[0]
       end
    end
        
    sorted_string
end