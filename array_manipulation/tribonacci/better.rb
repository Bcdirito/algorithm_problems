def tribonacci(n)
    trib_arr = [0, 1, 1]
    start_occurrences = 2
    
    (n-start_occurrences).times do
        trib_arr << trib_arr[-1] + trib_arr[-2] + trib_arr[-3]
        print(trib_arr)
    end
    
    trib_arr[n]
end