class Solution {
    isAnagram(s, t) {
        const cache = {};

        if (s.length !== t.length) return false;

        for (const c of s){
            cache[c] = (cache[c] ?? 0) + 1;
        }

        for (const c of t){
            if(cache[c]) {
                if (cache[c] === 1) {
                    delete cache[c];
                } else {
                    cache[c]--;
                }
            }
        }
        
        return Object.keys(cache).length === 0;
    }
}
