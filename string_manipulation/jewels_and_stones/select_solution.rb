# Runtime 36 ms, Memory Usage 9.5 MB

def num_jewels_in_stones(j, s)

    # declare a total variable
    # this will be the amount of jewels shared in both strings
    total = 0
    
    # split the j string into an array by the character
    # iterate through that array
    j.split("").each do |char|
        # check if that character is found in the s string
        if s.include?(char)
            # if so, split that string and use .collect to grab make a new array of just that specific character
            # increment the total by the length of that new array
            total += s.split("").select do |s_char| 
                s_char == char
            end.length
        end
    end
    
    # implicit return
    total
end