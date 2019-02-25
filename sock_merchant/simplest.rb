def sockMerchant(ar)
    # declare total variable at 0.
    # this will be incremented later
    total = 0

    # create a new empty hash
    # by using Hash.new(0), we set a default value to zero for every key we create
    # this way we can create and incremement the value by one in one line
    sockHash = Hash.new(0)

    # iterate through the array
    # for each sock you encounter, create a key and/or increment the value by 1
    ar.each {|i| sockHash[i] += 1}

    # iterate through the hash values
    # using a ternary, if the value of a key is two or more, divide that value by two, then round down to get number of pairs
    # if only one sock, move on to next key-value pair
    sockHash.values.each {|k, v| v >= 2 ? total += (v / 2).floor : next}

    # implicit return
    total
end