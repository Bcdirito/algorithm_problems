# Runtime 68ms, Memory Usage 11.7 MB

def nextGreaterElement(self, nums1, nums2):
    # declare an empty list
    # this will hold our new values
    new_nums1 = []
    
    # iterate through the nums1 list
    for n in nums1:
        # get a range of nums2
        # do this by finding the index of the current element of nums1 in nums2
        reduced_nums2 = nums2[nums2.index(n):]

        # reset the counter to 0
        counter = 0

        # iterate through the reduced_nums2 list
        for val in reduced_nums2:
            # increase the counter for each element
            counter += 1

            if val > n:
                # if the current value in nums2 is greater than n in nums1
                # append it to the new_nums list
                new_nums1.append(val)

                # then break out of the for loop
                break
            elif counter == len(reduced_nums2):
                # if no element is greater, append -1 to the new_nums list
                new_nums1.append(-1)
    
    # return the new_nums list
    return new_nums1