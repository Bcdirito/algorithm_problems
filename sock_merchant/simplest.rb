def sockMerchant(ar)
    total = 0
    sockHash = Hash.new(0)
    ar.each {|i| sockHash[i] += 1}
    sockHash.each {|k, v| v >= 2 ? total += (v / 2).floor : next}
    total
end