def unique_in_order(iterable)
  # declare an empty array to contain the unique order characters
  char_arr = []

  # check to see if the iterable is a string
  if iterable.instance_of? String
    # if it is, split the string and iterate with the index
    iterable.split("").each_with_index do |val, ind|
      # if the current value does not equal the next value, push it into the char_arr array
      if val != iterable[ind + 1]
        char_arr << val
      end
    end
  else
    # if the iterable is not a string, just iterate with the index
    iterable.each_with_index do |val, ind|
      # if the current val doesn not equal the next val, push it into the char_arr array
      if val != iterable[ind + 1]
        char_arr << val
      end
    end
  end

  # return the char_arr
  char_arr
end