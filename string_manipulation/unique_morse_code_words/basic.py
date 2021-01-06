def uniqueMorseRepresentations(words):
    morse_chars = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    alpha = "abcdefghijklmnopqrstuvwxyz"
    
    morse_dict = {}
    translation_dict = {}
    translation_list = []
    
    def translate_word(word, dictionary):
        translation = ""
        
        for w in word:
            translation += dictionary[w]
        
        return translation
    
    for c in range(len(morse_chars)):
        morse_dict[alpha[c]] = morse_chars[c]
    
    for w in words:
        trans = translate_word(w, morse_dict)
        if trans not in translation_dict:
            translation_dict[trans] = True
            translation_list.append(trans)
    
    return len(translation_dict)