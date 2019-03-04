# Runtime 1280 ms, Memory Usage 17.5 MB

def is_anagram(s, t)
    # create two arrays of the split argument strings
    t_arr = t.split("")
    s_arr = s.split("")
    
    # iterate through the s array
    s_arr.each do |let|
        if !t_arr.include?(let)
            # if t array doesn't include that letter, it's not a valid anagram
            return false
        else
            # find the first index of that letter in the t array
            ind = t_arr.index(let)

            # delete the index from t array
            t_arr.delete_at(ind)
        end
    end
    
    # if we've made it here, all of s is found in t
    # however, to be a valid anagram, they must be the same length
    # return whether or not the t array length is now equal to 0
    t_arr.length == 0
end