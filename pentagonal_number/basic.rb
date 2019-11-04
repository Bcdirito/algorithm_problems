def PentagonalNumber(num)
    # declare variable i
    # i will be equal the number of dots
    # i is declared with a value of one
    i = 1

    # if i (or 1) is less than the input value
    if i < num
        # set l equal to one
        l = 1
        # until l is equal to the input number
        until l == num
            # the amount of dots increases by multiples of five
            # increase i by that multiple
            i += l * 5

            # increase l
            l += 1
        end
    end

    # return i
    i
  end