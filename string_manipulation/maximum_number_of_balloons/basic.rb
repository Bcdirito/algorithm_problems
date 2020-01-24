# Runtime 64 ms, Memory Usage 9.6 MB

def max_number_of_balloons(text)
    # initialize a new hash with a default value of 0
    # this will be a history object of the characters in both the word balloon and the text
    balloon_hash = Hash.new(0)

    # split the text into an array
    # filter through the array to only grab the letters in balloon
    # then iterate through the newly generated filter array
    # if necessary, add a key, but always add a value of one to the corresponding key, which is each character in the filtered array
    text.split("").select {|char| "balon".include?(char)}.each {|char| balloon_hash[char] += 1}
    
    # define a helper method that takes in a hash, array, and integer
    def total_balloons(hash, arr, total)
        # iterate through the array
        # check if the corresponding key to the character has a value greater than zero
        # if so, decrement the value by one
        # if not, we cannot make any more balloons, so return the total
        arr.each do |char|
            if hash[char] > 0
                hash[char] -= 1
            else
                return total
            end
        end
            
        # if we made it here, we can make a full baloon, so increment the total by one
        total += 1
        
        # utilizing an implicit return, recursively run the method again
        total_balloons(hash, arr, total)
    end
    
    # return the value of the helper method using the balloon history hash, the word balloon split into an array, and a starting total of zero
    total_balloons(balloon_hash, ["b", "a", "l", "l", "o", "o", "n"], 0)
end