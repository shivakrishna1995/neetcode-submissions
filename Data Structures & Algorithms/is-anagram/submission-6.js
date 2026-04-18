class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
            count[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
        }

        return count.every(v => v === 0)
    }
}
