class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (const str of strs) {
            const count = new Array(26).fill(0);
            
            for (const c of str) {
                const code = c.charCodeAt(0) - "a".charCodeAt(0);
                count[code]++;
            }

            const countStr = count.join(",");

            if (res[countStr] === undefined) {
                res[countStr] = [];
            }
            
            res[countStr].push(str)
        }

        return Object.values(res)
    }
}
