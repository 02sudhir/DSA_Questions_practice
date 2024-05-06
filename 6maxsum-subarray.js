//given an integer of an array nums find the subarray with largest sum and return the sum 

// input :[-2,1,-3,4,-1,2,1,-5,4]  ===>> 6
//input : [5,4,-1,7,8]   =>> 23

    function maxSubArray(nums)
    {
        let maxSum= nums[0];
        for (let i = 0; i < nums.length; i++) {
        let currentSum=0;
        for (let j = 1; j < nums.length; j++) {
            {
                currentSum= currentSum +nums[i];
                if(currentSum > maxSum)
                {
                    maxSum=currentSum;
                }
            }
            
        }
        return maxSum;
            
        }
    console.log(currentSum([5,4,-1,7,8]));
}