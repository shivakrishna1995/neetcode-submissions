class Solution {
    twoSum(nums, target) {
        const map = {};

        for (const [index, num] of nums.entries()) {
            const t = target - num;
            if (t in map) {
                return [map[t], index];
            }
            map[num] = index;
        }

        return [-1, -1];
    }
}
