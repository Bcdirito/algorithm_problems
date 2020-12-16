def toGoatLatin(self, S: str) -> str:
    reference = {}
    for char in "aeiouAEIOU":
        reference[char] = ""
    
    split_str = S.split(" ")
    a_str = ""
    goat_arr = []
    
    def goat_word(word):
        goat_suffix = "ma" + a_str
        if word[0] in reference:
            return word + goat_suffix
        else:
            return word[1:] + word[0] + goat_suffix
            
    for s in split_str:
        a_str += "a"
        goat_arr.append(goat_word(s))
    
    return " ".join(goat_arr)