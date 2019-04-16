def digitize(n)
    split_str = n.to_s.reverse.split("")
    int_arr = []
    
    split_str.each {|i| int_arr << i.to_i}
    
    int_arr
end