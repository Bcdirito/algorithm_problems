# Runtime 56 ms, Memory Usage 15.5 MB
def frequencySort(s: str):
    # declare an empty dictionary that will hold characters as keys and their occurrences as values
    # delcare an empty string that will be the sorted characters by frequency
    count_dict = {}
    sort_str = ''
    
    # iterate through the input string and collect the occurrences
    for x in s:
        if x in count_dict:
            count_dict[x] += 1
        else:
            count_dict[x] = 1          
    
    # sort the dictionary by values
    # it will return a list of tuples
    # iterate through said list
    # for each tuple add the character the number of occurrences times to the string
    for k in sorted(count_dict.items(), key=lambda x: x[1], reverse=True):
        for i in range(0, k[1]):
            sort_str += k[0]
    
    # return the sorted string
    return sort_str