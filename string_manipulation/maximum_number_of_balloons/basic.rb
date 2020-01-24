def max_number_of_balloons(text)
    balloon_hash = Hash.new(0)
    text.split("").select {|char| "balon".include?(char)}.each {|char| balloon_hash[char] += 1}
    
    
    def total_balloons(hash, total)
       "balloon".split("").each do |char|
          print(hash, char)
          if hash[char] > 0
              hash[char] -= 1
          else
              return total
          end
       end
        
        total += 1
           
        return total_balloons(hash, total)
    end
    
    total_balloons(balloon_hash, 0)
end