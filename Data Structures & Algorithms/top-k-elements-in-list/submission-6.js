class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const bucket = new Array(nums.length).fill(0);
        const res = [];

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
        }

        for (const num in map) {
            if (bucket[map[num]]) {
                bucket[map[num]].push(num);
            } else {
                bucket[map[num]] = [num];
            }
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
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
