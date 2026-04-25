class Solution {
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        const set = new Set();

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            
            set.add(s[right]);
            maxLen = Math.max(right - left + 1, maxLen);
        }

        return maxLen;
    }
}
