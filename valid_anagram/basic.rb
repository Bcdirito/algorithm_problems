def is_anagram(s, t)
    t_arr = t.split("")
    s_arr = s.split("")
    
    s_arr.each do |let|
        if !t_arr.include?(let)
            return false
        else
            ind = t_arr.index(let)
            t_arr.delete_at(ind)
        end
    end
    
    t_arr.length == 0
end