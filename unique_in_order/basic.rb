def unique_in_order(iterable)
    char_arr = []
    
    if iterable.instance_of? String
      iterable.split("").each_with_index do |val, ind|
        if val != iterable[ind + 1]
          char_arr << val
        end
      end
    else
      iterable.each_with_index do |val, ind|
        if val != iterable[ind + 1]
          char_arr << val
        end
      end
    end
    
    char_arr
  end