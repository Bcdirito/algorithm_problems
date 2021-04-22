def add_to_array_form(num, k)
    sum = num.join("").to_i + k
    return sum.to_s.split("").map {|char| char.to_i}
end