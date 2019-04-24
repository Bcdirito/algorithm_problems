def open_or_senior(data)
    final_arr = []
    data.each do |a|
      if a[0] >= 55 && a[1] > 7
        final_arr << "Senior"
      else
        final_arr << "Open"
      end
    end
    return final_arr
  end