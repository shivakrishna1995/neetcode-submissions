class Solution {
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        const map = new Map();

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right]) && map.get(s[right]) >= left) {
                left = map.get(s[right]) + 1;
            }
            
            map.set(s[right], right);
            maxLen = Math.max(right - left + 1, maxLen);
        }

        return maxLen;
    }
}
