def is_palindrome(x)
    split = x.to_s.split("")
    i = 1
    split.each do |s|
        if s == split[-i]
            i += 1
        else
            return false
        end
    end
    true
end