def max_profit(prices)
    if prices.length > 0
        share = prices[0]
        profit = 0
        remainder_prices = prices[1..-1]
        remainder_prices.each do |stock|
           if stock < share
               share = stock
           end

            if stock - share > profit
                profit = stock - share
            end
        end
        profit
    else
        return 0    
    end
end