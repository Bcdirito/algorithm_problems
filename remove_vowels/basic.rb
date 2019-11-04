def disemvowel(str)
    # declare empty string variable
    # this will contain our edited string
    edit_str = ""

    # split_str into an array so we can iterate through it
    split_str = str.split("")

    # declare an array that contains the vowels
    vowels = ["a", "e", "i", "o", "u"]
    
    # iterate through the split string array
    split_str.each do |s|
      if !vowels.include?(s.downcase)
        # check if vowels contains the lowercased current character
        # if it doesn't add it to the edited string variable
        edit_str += s
      end
    end
    
    # implicit return
    edit_str
  end