def high(x)
    split_x = x.split(" ")
    word_hash = Hash.new(0)
    checker = "a".ord - 1
    highest_word = ""
    highest_value = 0
    
    split_x.each do |word|
      word.split("").each {|c| word_hash[word] += c.ord - checker}
    end
    
    word_hash.each do |k, v|
      if v > highest_value
        highest_word = k
        highest_value = v
      end
    end
    
    highest_word
  end