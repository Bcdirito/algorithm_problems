def next_greater_element(nums1, nums2)
    new_nums1 = []
    
    nums1.each do |val|
        nums2_reduced = nums2[nums2.index(val)..-1]
        nums2_reduced.each_with_index do |num, idx|
            if num > val
                new_nums1 << num
                break
            elsif idx == nums2_reduced.length - 1
                new_nums1 << -1
            end
        end
    end
    
    new_nums1
end