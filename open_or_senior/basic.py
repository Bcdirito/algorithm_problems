def open_or_senior(data):
    final_list = []

    for d in data:
        if d[0] >= 55 and d[0] > 7:
            final_list.append("Senior")
        else:
            final_list.append("Open")
    
    return final_list