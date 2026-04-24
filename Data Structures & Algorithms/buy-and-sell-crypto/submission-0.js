class Solution {
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            buy = Math.min(buy, prices[i - 1]);
            const sell = prices[i];
            const profit = sell - buy;
            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
