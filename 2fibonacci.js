// Q : fibbonacci number
//Fibonacci sequence, such that each number is the sum of the two preceding ones
//fibonacci series -> 0,1,2,3,5,8,13
// F(0) =0, F(1) =1
// F(n) = F(n-1) + F(n-2), for  n>1

//Input : n=3 -----.> output =2

var fib = function(n){
    const arr = [0,1];
    for (let i = 2; i <= n; i++){
        arr.push(arr[i-1]+arr[i-2]);

    }
   return arr[n];
//    console.log(arr[5]);
};

fib(5);
