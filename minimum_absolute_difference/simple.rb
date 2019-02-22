def minimumAbsoluteDifference(arr)
    arr.sort!
    min_dif = (arr[0] - arr[1]).abs
    i = 1
    while i < arr.length - 1
    l = i + 1
    if (arr[i] - arr[i + 1]).abs < min_dif
        min_dif = (arr[i] - arr[i + 1]).abs
    end
    i += 1
    end
    min_dif
end