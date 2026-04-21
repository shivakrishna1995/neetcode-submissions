class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
        }

        for (const num in map) {
            bucket[map[num]].push(num);
        }

        for (let i = bucket.length - 1; i > 0; i--) {
            if(bucket[i] !== 0) {
                for (const entry of bucket[i]) {
                    res.push(entry)
                }
            }

            if(res.length === k) {
                return res;
            }
        }

        return res;
    }
}
