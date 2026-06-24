class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {}
        for (const num of nums) 
            freqs[num] = (freqs[num] || 0) + 1;


        const result = Array.from({length: nums.length + 1}, () => []);


        for (const [num, freq] of Object.entries(freqs)) {
            result[freq].push(num);
        }

        let res = [];

        for (let i = result.length - 1; i > 0; i--) {
            res = [...res, ...result[i]]
        }

        return res.slice(0, k)
    } 
}
