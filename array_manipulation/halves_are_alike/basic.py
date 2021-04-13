def halvesAreAlike(self, s: str) -> bool:
    mid_idx = int(len(s) / 2)
    first = s[0:mid_idx]
    second = s[mid_idx:]
    vowel_dict = {}
    first_vowels = 0
    second_vowels = 0
    
    for x in "aeiouAEIOU":
        vowel_dict[x] = ""
    
    for f in first:
        if f in vowel_dict:
            first_vowels += 1
    
    for s in second:
        if s in vowel_dict:
            second_vowels += 1
            
    return first_vowels == second_vowels