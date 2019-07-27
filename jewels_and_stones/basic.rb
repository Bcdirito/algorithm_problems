# Runtime 40ms, Memory Usage 9.4 mb

def num_jewels_in_stones(j, s)

    # declare a total variable
    # this will be the amount of jewels shared in both strings
    total = 0
    
    # split the j string into an array by the character
    # iterate through that array
    j.split("").each do |char|
        # check if that character is found in the s string
        if s.include?(char)
            # if so, split that string and iterate through the array
            s.split("").each do |s_char|
                # using this if statement, increment the total by one for each apperance of that particular character
                if s_char == char
                    total += 1
                end
            end
        end
    end
    
    # implicit return
    total
end