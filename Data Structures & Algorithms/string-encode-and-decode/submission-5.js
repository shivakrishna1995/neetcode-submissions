class Solution {
    encode(strs) {
        let encodedStr = '';
        for (const str of strs) {
            encodedStr += `${str.length}#${str}`;
        }
        return encodedStr;
    } 

    decode(str) {
        const strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const len = parseInt(str.slice(i, j));
            i = j + 1;
            strs.push(str.slice(i, i + len));
            i += len;
        }
        return strs;
    }
}
