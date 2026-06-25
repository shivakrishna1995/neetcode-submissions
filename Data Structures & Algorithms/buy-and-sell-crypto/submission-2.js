class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        let l = 0, r = 1

        while (prices[r] !== undefined) {
            if (prices[l] < prices[r]) {
                max = Math.max(prices[r] - prices[l], max);
            } else {
                l = r;
            }
            r++;
        }

        return max;
    }
}
