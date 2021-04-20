def is_power_of_three(n)
    prod = 1
    power = 0
    
    while prod <= n
        exp = 3**power
        if exp == n
            return true
        else
            prod = exp
            power += 1
        end
    end
    
    return false
end