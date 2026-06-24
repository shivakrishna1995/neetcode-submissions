class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);

        for (const num of nums) {
            let long = 1;
            let i = num;
            while (set.has(i - 1)) {
                long++;
                i = i - 1
            }

            longest = Math.max(long, longest)
        }

        return longest
    }
}
