def get_middle(s):
    #your code here
    if len(s) % 2 == 0:
        index_two = len(s) / 2
        index_one = index_two - 1
        
        return "{ind_one}{ind_two}".format(ind_one = s[index_one], ind_two = s[index_two])
    else:
        return s[(len(s) - 1)/2]