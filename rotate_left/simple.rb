def rotLeft(a, d)
    # declare a variable grabbing the section of array up to what will become the first index, which is the index that is equal to d
    # you want to use the exclusive range "..." since we're going up to d but don't want d
    arr1 = a[0...d]

    # declare a variable starting from d and going to the end
    # you want to use the inclusive range ".." to make sure we grab the final value
    arr2 = a[d..-1]

    # concat arr1 onto the end of arr2
    # implicit return
    arr2.concat(arr1)
end