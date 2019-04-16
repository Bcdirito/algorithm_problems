def digitize(n)
    split_str = n.to_s.split("")
    int_arr = []
    
    split_str.each do |i|
      num = i.to_i
      int_arr.unshift(num)
    end
    
    int_arr
end