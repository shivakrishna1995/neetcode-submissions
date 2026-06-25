class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let len = 0, l = 0, r = 0, wind = new Set()

        while (r < s.length) {
            while (wind.has(s[r])) {
                wind.delete(s[l])
                l++
            }

            wind.add(s[r])
            len = Math.max(wind.size, len)
            r++
        }

        return len
    }
}
