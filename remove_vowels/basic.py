def disemvowel(string):
    edit_string = ""
    vowels = ["a", "e", "i", "o", "u"]
    
    for s in string:
        if s.lower() not in vowels:
            edit_string += s
    
    return edit_string