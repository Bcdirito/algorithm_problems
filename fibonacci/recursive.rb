def fib(n)
    store = [0, 1]
    i = 1
    
    def recursive(number, check, store)
        sum = store[-1] + store[-2]
        store << sum
        number += 1
        if number < check
            recursive(number, check, store)
        end
    end
    
    recursive(i, n, store)
    store[-1]
end