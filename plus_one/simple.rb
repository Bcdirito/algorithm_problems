def plus_one(digits)
    int = digits.join.to_i + 1
    strArr = int.to_s.split("")
    strArr.map {|s| s.to_i}
end