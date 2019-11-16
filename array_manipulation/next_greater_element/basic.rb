# Runtime 48ms, Memory Usage 9.6 MB

def next_greater_element(nums1, nums2)
    # declare an empty array
    # this will hold our next greater element and -1 values
    new_nums1 = []
    
    # iterate through nums1
    nums1.each do |val|
        # get a range of nums2
        # do this by getting index of the current element in nums2 
        nums2_reduced = nums2[nums2.index(val)..-1]

        # iterate through the reduced nums2
        nums2_reduced.each_with_index do |num, idx|
            if num > val
                # if the value of the element in nums2 is greater than the current element in nums 1
                # push it into the new_nums1 element
                new_nums1 << num
                
                # then break out of the iterator
                break
            elsif idx == nums2_reduced.length - 1
                # if no element is greater, push -1 into the new_nums1 array
                new_nums1 << -1
            end
        end
    end
    
    # return the new_nums1 array
    new_nums1
end