class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        
        for (const str of strs)
            res += `${str.length}#${str}`
        

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = []

        let l = 0, r = 0

        while (l < str.length) {
            while (str[r] !== '#')
                r++;
            
            const len = parseInt(str.slice(l, r))

            console.log(len, l, r)

            l = r + 1;
            r = l + len;

            const sub = str.slice(l, r)

            strs.push(sub)

            l = r
        }

        return strs
    }
}
