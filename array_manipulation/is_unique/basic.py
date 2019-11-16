def unique_list(lst):
    unique = []

    for i in lst:
        if i not in unique:
            unique.append(i)
        else:
            return False
    
    return True

print(unique_list([1, 2, 3, 4, 5]))
print(unique_list([1, 2, 2, 3]))
print(unique_list(["brian", "Brian", "edith", "Edith"]))