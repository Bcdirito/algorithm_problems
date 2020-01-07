# Runtime 40 ms, Memory Usage 9.7 MB

def add_digits(num)
    
    # define a helper method that takes in a number
    def add_recursive(number)
        # first, convert the number into a string
        # then split that string by each character
        # use .map to iterate through the string
        # convert each character to an integer and return it to the array
        # then, utilizing .inject, add all of the integeres in the array to get your sum
        num_sum = number.to_s.split("").map {|char| char.to_i}.inject(0, :+)

        # check if the sum is greater than 9
        # if so, recursively run the function again
        # if not, return the sum
        if num_sum > 9
            return add_recursive(num_sum)
        else
            return num_sum
        end
    end
    
    # implicit retur
    add_recursive(num)
end