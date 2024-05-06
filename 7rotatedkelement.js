// rotated k element
//given an integer array nums, rotate the array to the right by k steps
// whre k is non -ve


function rotedArray(nums,k){
   let  size =nums.length;
   if(size>k){
    k=k%size;
   }

   

   const rotated = nums.splice(size-k,size);
//    nums.unshift(...rotated);

   return nums;
}

console.log(rotedArray([1,2,3,4,5,6,7],3));


