def valid_palindrome(word):
    compact_word = "".join(word.replace(" ","")).lower()
    i = 0
    mid_ind = len(word) // 2

    while i < mid_ind:
        n = (i + 1) * -1
        if compact_word[i] != compact_word[n]:
            return False
        else:
            i += 1
    
    return True

print(valid_palindrome("A man a plan a canal Panama"))
print(valid_palindrome("Not a ton"))
print(valid_palindrome("Is this"))
print(valid_palindrome("Do Geese See God"))
print(valid_palindrome("Race a car"))