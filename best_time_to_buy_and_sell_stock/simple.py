class Solution(object):
    def maxProfit(self, prices):
        if len(prices) > 0:
            stock = prices[0]
            profit = 0

            for p in prices:
                if p < stock:
                    stock = p

                if p - stock > profit:
                    profit = p - stock
            
            return profit
        else:
            return 0