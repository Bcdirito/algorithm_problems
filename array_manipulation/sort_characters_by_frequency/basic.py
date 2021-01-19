def frequencySort(self, s: str) -> str:
    count_dict = {}
    sort_str = ''
    
    for x in s:
        if x in count_dict:
            count_dict[x] += 1
        else:
            count_dict[x] = 1
    
    sorted_keys = sorted(count_dict.items(), key=lambda x: x[1], reverse=True)           
    
    for k in sorted_keys:
        for i in range(0, k[1]):
            sort_str += k[0]
    
    return sort_str