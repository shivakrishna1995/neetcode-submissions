class Solution {
    isValid(s) {
        const stack = [];

        for (const ch of s) {
            if (ch === "(" || ch === "{" || ch === "[") {
                stack.push(ch);
                continue;
            } 

            if (!stack.length) return false;

            const top = stack.pop();

            if (
                (top === "(" && ch !== ")") ||
                (top === "{" && ch !== "}") ||
                (top === "[" && ch !== "]")
            ) return false
        }

        return !stack.length;
    }
}
