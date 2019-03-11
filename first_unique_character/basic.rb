def first_uniq_char(s)
    history = Hash.new(0)
    split = s.split("")
    split.each {|i| history[i] += 1}
    unique = split.find {|c| history[c] == 1}
    if unique
        split.index(unique)
    else
        return -1
    end
end