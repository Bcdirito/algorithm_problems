def round_to_next5(n):
    print(n)
    if n % 5 == 0:
        return n
    else:
        diff = 5 - (n % 5)
        return n + diff