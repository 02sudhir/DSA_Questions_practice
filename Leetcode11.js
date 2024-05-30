// 11:container-with-most-water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

let height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
    let mx = 0;
    let l =0;
    let  r = height.length - 1

    while(l < r){
        mx= Math.max(mx ,Math.min(height[l],height[r]) * (r-1))
        
        if(height[l]<height[r]) l+=1
        else if (height[r]<height[l]) r-=1
        else{
            l+=1
            r-=1
        }
     
    }
    return mx
};

console.log(maxArea(height));