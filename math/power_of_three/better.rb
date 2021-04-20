def is_power_of_three(n)
    if n == 1 || n == 3
        return true
    elsif n % 3 != 0
        return false
    end
    
    def check_power(exp, check_num)
        prod = 3**exp
        if prod == check_num
            return true
        elsif prod > check_num
            return false
        else
            return check_power(exp+1, check_num)
        end
    end
    
    check_power(0, n)
end