def tribonacci(signature,n)
    if n == 0
        # if n == 0, return an empty array
        # an empty array has a length of 0
        return []
    elsif n <= 3
        # if n is less than or equal to 3 return a range of the signature array
        # to make sure the length matches n, make it exclusive
        return signature[0...n]
    else
        # declare an array variable that is equal to signature
        array = signature

        # declare a remainder variable
        # the value of this variable is equal to n - 3
        # this value dictaes the amount of times when our .times loop
        remainder = n - 3

        # run a .times loop
        remainder.times do
            # add the last three elements of the array variable
            sum = array[-1] + array[-2] + array[-3]

            # push in the sum
            array << sum
        end

        # return the array
        return array
    end
  end