def fib(n)
    store = [0, 1]
    remainder = n - 1
    
    remainder.times do
        sum = store[-1] + store[-2]
        store << sum
    end
    store[-1]
    return 0
end