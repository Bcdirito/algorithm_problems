def duplicate_zeros(arr)
    skip_zeroes = {}
    
    arr.each_with_index do |a, idx|
        if a == 0 && skip_zeroes[idx].nil?
            arr.insert(idx, 0)
            skip_zeroes[idx+1] = ""
            arr.pop()
        end
    end
end