class Solution {
    hasDuplicate(nums) {
        const seen = {};

        for(const num of nums) {
            if(num in seen) {
                return true;
            }
            seen[num] = (seen[num] || 0) + 1
        }

        return false;
    }
}
