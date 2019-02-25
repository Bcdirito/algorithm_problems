def sockMerchant(ar)
    total = 0
    
    sockHash = {}

    ar.each do |sock|
        if sockHash["#{sock}"]
            sockHash["#{sock}"] += 1
        else
            sockHash["#{sock}"] = 1
        end
    end
    
    sockHash.each do |k, v| 
        if v >= 2 
            total += (v / 2).floor
        end
    end
    total
end