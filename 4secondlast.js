
// second largets number
// given an array  of size N print second largest
// distinct element

// inp : [ 12,15,10,1,34,88,25]   --> 34
//inp : [ 10,5,10]  ---> 5

function secondLargest (arr){
    const uniqueArr =  Array.from(new Set(arr));
    uniqueArr.sort((a,b) => {
        return b-a;
    });

    if (uniqueArr.length>=2) {
        return uniqueArr[1];
        
    }
    else{
        return -1;
    }
}
console.log(secondLargest([10,1,85,85,85]));
//check this code too
//console.log(secondLargest([10,10000,85,85,10000]));

