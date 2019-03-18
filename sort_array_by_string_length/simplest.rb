def sort_by_length(arr)
    # built-in ruby iterator
    # creates an array sorted by the length of each element
    # implicit return
    arr.sort_by {|word| word.length} 
end