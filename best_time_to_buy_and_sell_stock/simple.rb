# Runtime 40 ms, Memory Usage 10.2 MB

def max_profit(prices)
    # set the first share as equal to the first element in the array
    # we will use this share as a checking point
    share = prices[0]

    # set a base profit equal to zero
    profit = 0

    # get the remainder elements of the array
    # make sure to use .. so that the range is inclusive
    remainder_prices = prices[1..-1]

    # iterate through the remainder array
    remainder_prices.each do |stock|
        if stock < share
            # if the current stock is less than the saved share, store the new stock
            share = stock
        end

        if stock - share > profit
            # if the current stock minus the stored share is a bigger profit than the stored profit, make store that difference as the new profit
            profit = stock - share
        end
    end

    # return the profit
    profit
end