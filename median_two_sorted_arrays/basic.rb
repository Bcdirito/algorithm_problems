def find_median_sorted_arrays(nums1, nums2)
    arr = nums1 + nums2
    arr.sort!
    midInd = (arr.length / 2).floor
    if arr.length % 2 != 0
        return arr[midInd]
    else
        median = (arr[midInd].to_f + arr[midInd-1].to_f)/2.0
        median
    end 
end