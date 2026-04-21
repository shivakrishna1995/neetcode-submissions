class Solution {
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        let preSum = 1;
        let postSum = 1;
        
        for (let i = 0; i < nums.length; i++) {
            res[i] = preSum;
            preSum *= nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postSum;
            postSum *= nums[i]
        }

        return res;
    }
}
