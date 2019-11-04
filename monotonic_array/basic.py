def isMonotonic(A):
    tonic = True
    
    def mono_inc(arr):
        for a in range(0, len(arr) - 1):
            if arr[a] > arr[a+1]:
                return False
                
        return True
    
    def mono_dec(arr):
        for a in range(0, len(arr) - 1):
            if arr[a] < arr[a+1]:
                return False
        
        return True
    
    for a in range(0, len(A) - 1):
        if A[a] != A[a+1]:
            reduced_arr = A[a:]
            if A[a] < A[a+1]:
                tonic = mono_inc(reduced_arr)
            else:
                tonic = mono_dec(reduced_arr)
            break
    
    
    return tonic
                    