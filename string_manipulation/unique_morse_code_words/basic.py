def uniqueMorseRepresentations(words):
    # declare a list variable that contains the morse characters
    morse_chars = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    # declare a string containing the alphabet
    alpha = "abcdefghijklmnopqrstuvwxyz"
    
    # declare three variables
    # 1. a dictionary that we'll use to translate the chracters to morse
    # 2. a dictionary to hold the translated words
    # 3. a list containing unique translated words
    morse_dict = {}
    translation_dict = {}
    translation_list = []
    
    # declare a helper method that takes in a string and the translation dictionary
    # this method will iterate through the string and translate it to morse
    def translate_word(word, dictionary):
        translation = ""
        
        for w in word:
            translation += dictionary[w]
        
        return translation
    
    for c in range(len(morse_chars)):
        morse_dict[alpha[c]] = morse_chars[c]
    
    # iterate through the list of words
    # call the helper method to translate the word to morse
    # check if the word is in the translation dictionary
    # if not, add it to the dictionary and translation list
    for w in words:
        trans = translate_word(w, morse_dict)
        if trans not in translation_dict:
            translation_dict[trans] = ""
            translation_list.append(trans)
    
    # return the list of unique translated words
    return len(translation_list)