def is_monotonic(a)
    tonic = true
    
    def tonic_inc(arr)
        arr[0...-1].each_with_index do |val, idx|
            if val > arr[idx+1]
                return false
            end
        end
        
        true
    end
    
    def tonic_dec(arr)
        arr[0...-1].each_with_index do |val, idx|
            if val < arr[idx+1]
                return false
            end
        end
        
        true
    end
        
    a[0...-1].each_with_index do |val, idx|
       if val != a[idx+1]
           reduced_arr = a[idx..-1]
           if val < a[idx+1]
              tonic = tonic_inc(a)
           else
               tonic = tonic_dec(a)
           end
           
           print(tonic)
           break
       end
    end
    
    tonic
end