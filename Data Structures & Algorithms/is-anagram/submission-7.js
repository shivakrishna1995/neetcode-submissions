class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const count = {};

        if (s.length !== t.length) return false

        for (const c of s) {
            count[c] = (count[c] || 0) + 1
        }

        for (const c of t) {
            if (!count[c]) return false

            count[c]--;
        }

        return Object.values(count).findIndex(c => c !== 0) === -1;
    }
}
