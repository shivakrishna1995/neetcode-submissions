class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        let l = 0, r = heights.length - 1

        while (l < r) {
            const minHeight = Math.min(heights[l], heights[r])
            const width = r - l
            maxWater = Math.max(minHeight * width, maxWater)
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxWater
    }
}
