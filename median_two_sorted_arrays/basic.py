def find_median(list_one, list_two):
    combined_list = list_one + list_two
    combined_list.sort()

    if len(combined_list) % 2 == 0:
        mid_ind_one = combined_list[(len(combined_list) // 2) - 1]
        mid_ind_two = combined_list[len(combined_list) // 2]
        return (mid_ind_one + mid_ind_two) / 2
    else:
        return combined_list[len(combined_list) // 2]

print(find_median([1, 2], [3, 4]))
print(find_median([1, 3], [2]))