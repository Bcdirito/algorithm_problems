def rotLeft(a, d)
    arr1 = a[0...d]
    arr2 = a[d..-1]
    arr2.concat(arr1)
end