def fibonacci(n)
    store = [0, 1]
    i = 1
    
    until i == n
        sum = store[-1] + store[-2]
        store << sum
        i += 1
    store[-1]
end