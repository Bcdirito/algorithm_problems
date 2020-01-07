def add_digits(num)
    
    def add_recursive(number)
        num_sum = number.to_s.split("").map {|char| char.to_i}.inject(0, :+)
        if num_sum > 9
            return add_recursive(num_sum)
        else
            return num_sum
        end
    end
    
    add_recursive(num)
end