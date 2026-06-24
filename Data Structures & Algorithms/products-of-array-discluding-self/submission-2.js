class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // [1,2,4,6]
    productExceptSelf(nums) {
        const res = Array(nums.length).fill(1);
        // [1,1,1,1]
        let pre = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = pre;
            pre *= nums[i]
        }

        let post = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= post;
            post *= nums[i]
        }

        return res
    }
}
