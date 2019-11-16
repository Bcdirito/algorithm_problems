def vowel_counter(string):
    total_vowels = 0
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    i = 0

    while i < len(string):
        if string[i] in vowels:
            total_vowels += 1
        i += 1
    
    return total_vowels

print(vowel_counter("Girls Who Code"))
print(vowel_counter("Edith Rocks!"))
print(vowel_counter("I can't wait to be back tomorrow!"))