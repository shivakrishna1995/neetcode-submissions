class Solution {
    maxArea(heights) {
        let maxWater = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const d = r - l;

            if (heights[l] < heights[r]) {
                maxWater = Math.max(maxWater, d * heights[l]);
                l++;
            } else {
                maxWater = Math.max(maxWater, d * heights[r]);
                r--;
            }
        }

        return maxWater;
    }
}
