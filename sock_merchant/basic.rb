def sockMerchant(ar)
    # declare total variable and set at 0
    # we will increment this later
    total = 0
    
    # declare empty sockHash
    # we will add key-value pairs to this
    sockHash = {}

    # iterate through the array
    ar.each do |sock|
        if sockHash["#{sock}"]
            # if there is a key for the sock, increment the value by 1
            sockHash["#{sock}"] += 1
        else
            # if there is no key for the sock, create one and set the value to 1
            sockHash["#{sock}"] = 1
        end
    end
    
    # iterate through the sockHash
    sockHash.each do |k, v| 
        if v >= 2 
            # if the value of a key is equal to two or great, divide by two
            # then round down to get the accurate number of pairs
            # increment the total by that amount
            total += (v / 2).floor
        end
    end

    # implicit return
    total
end