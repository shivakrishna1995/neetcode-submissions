class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets = []

        nums.sort((a,b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];

            if (i > 0 && nums[i - 1] === a) continue;

            let j = i + 1, k = nums.length - 1

            while (j < k) {
                const b = nums[j]
                const c = nums[k]

                const sum = a + b + c

                if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    triplets.push([a, b, c])
                    j++;
                    k--;

                    while (j < k && nums[j] === nums[j-1]) j++;
                }
            }
        }

        return triplets;
    }
}
