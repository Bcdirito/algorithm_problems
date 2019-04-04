def disemvowel(str)
    edit_str = ""
    split_str = str.split("")
    vowels = ["a", "e", "i", "o", "u"]
    
    split_str.each do |s|
      if !vowels.include?(s.downcase)
        edit_str += s
      end
    end
    
    edit_str
  end