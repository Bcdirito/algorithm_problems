def sum_pairs(ints, s)
    history = Hash.new
    ints.each do |i|
      if history[i] != nil
        return [history[i], i]
      else
        difference = s - i
        history[difference] = i
      end
    end
    nil
end