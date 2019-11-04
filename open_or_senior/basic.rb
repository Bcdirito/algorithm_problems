def open_or_senior(data)
    # declare an empty array to contain "Senior" & "Open" values
    final_arr = []

    # iterate through the data
    data.each do |a|
        if a[0] >= 55 && a[1] > 7
            # if the age is 55 or older and the handicap is above 6
            # push "Senior" into the final_arr
            final_arr << "Senior"
        else
            # if not, push "Open" into the array
            final_arr << "Open"
        end
    end
    
    # return the final_arr
    final_arr
  end