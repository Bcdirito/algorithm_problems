def open_or_senior(data):
    # declare an empty list variable
    # this will hold the "Senior" and "Open" values
    final_list = []

    # iterate through the data
    for d in data:
        if d[0] >= 55 and d[0] > 7:
            # if the age is 55 or older and the handicap is above 7
            # append "Senior" to the final_list
            final_list.append("Senior")
        else:
            # if parameters are not met, append "Open" to the final list
            final_list.append("Open")
    
    return final_list