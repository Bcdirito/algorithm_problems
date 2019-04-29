def nextGreaterElement(self, nums1, nums2):
        new_nums1 = []
        
        for n in nums1:
            new_origin = nums2.index(n)
            reduced_nums2 = nums2[new_origin:]
            counter = 0
            for val in reduced_nums2:
                counter += 1
                if val > n:
                    new_nums1.append(val)
                    break
                elif counter == len(reduced_nums2):
                    new_nums1.append(-1)
        
        return new_nums1