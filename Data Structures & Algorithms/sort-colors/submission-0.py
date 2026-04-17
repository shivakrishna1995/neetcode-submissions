class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        bucket = [0, 0, 0]

        for num in nums:
            bucket[num] += 1

        i = 0

        for j, cnt in enumerate(bucket):
            for _ in range(cnt):
                nums[i] = j
                i += 1
        