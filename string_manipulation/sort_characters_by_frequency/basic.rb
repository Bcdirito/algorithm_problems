# Runtime 920 ms, Memory Usage 145 MB

def frequency_sort(s)
    # initialize a new hash variable, with every default value of zero
    frequency_hash = Hash.new(0)

    # initalize an empty string variable
    sorted_string = ""
    
    # split the string by character
    # create a key value pair of each character and continue to increment the value by one
    s.split("").each {|char| frequency_hash[char] += 1}
    
    # sort the hash by the values and convert it into an array of of arrays
    # each first index is the key and each second index is the frequency
    # iterate through the sorted array
    # utilizing .times, use the second index to determine how many times you will run the block logic
    # the block should be adding the character to the string the appropriate amount of times
    frequency_hash.sort_by {|k, v| -v}.each do |key|
       key[1].times do
           sorted_string += key[0]
       end
    end
    
    # implicit return the sorted string
    sorted_string
end