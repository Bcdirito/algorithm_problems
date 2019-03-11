
def is_palindrome(x)
    string = "#{x}"
    reverse = ""
    string.split("").each {|s| reverse = s + reverse}
    string == reverse
end