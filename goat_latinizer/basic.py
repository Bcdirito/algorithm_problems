def toGoatLatin(self, S):
    goat_list = []
    split_str = S.split(" ")
    counter = 0
    
    for word in split_str:
        counter += 1
        word_count = 0
        
        goat_str = ""
        if word[0].lower() in "aeiou":
            goat_str += word + "ma"
        else:
            goat_str = word[1:] + word[0] + "ma"
        
        while word_count < counter:
            goat_str += "a"
            word_count += 1
        
        goat_list.append(goat_str)
        
    return " ".join(goat_list)