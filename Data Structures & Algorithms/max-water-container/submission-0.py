class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maxWater = 0
        l, r = 0, len(heights) - 1

        while l < r:
            d = r - l

            if heights[l] > heights[r]:
                w = d * heights[r]
                maxWater = max(maxWater, w)
                r -= 1
            else:
                w = d * heights[l]
                maxWater = max(maxWater, w)
                l += 1
        
        return maxWater
