# Runtime 100 ms, Memory Usage 12.6 MB


class Solution(object):
    def maxProfit(self, prices):
            # declare variable 
            stock = prices[0]

            # declare a profit variable
            # set profit to zero
            profit = 0

            # iterate through the prices list
            for p in prices:
                if p < stock:
                    # if the current element is less than the stock variable
                    # set the stock variable to the current element 
                    stock = p

                if p - stock > profit:
                    # if the current element minus the stock variable is a greater valuable than the profit
                    # set the profit variable to that difference
                    profit = p - stock
            
            # return the profit
            return profit