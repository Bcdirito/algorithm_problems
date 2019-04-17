def round_to_next_5(n)
    # if n is divisible by 5, return n
    if n % 5 == 0
      return n
    elsif n % 5 > 0
    # if not, check if it is positive
    # if positive, round up by adding the difference between 5 and n
      return n + (5 - (n % 5))
    else
    # if negative, round up by adding the remainder of 5 and n
      return n + (5 % n)
    end
  end