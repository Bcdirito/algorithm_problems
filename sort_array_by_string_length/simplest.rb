def sort_by_length(arr)
    # built-in ruby iterator
    # returns a sorted array with the elements ordered by length
    # implicit return
    arr.sort_by {|word| word.length} 
  end