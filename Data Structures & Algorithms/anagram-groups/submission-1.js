class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (const str of strs) {
            const count = new Array(26).fill(0);

            for (const ch of str) {
                count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const countStr = count.join(",");

            if(!res[countStr]) {
                res[countStr] = [];
            }

            res[countStr].push(str);
        }

        return Object.values(res);
    }
}
