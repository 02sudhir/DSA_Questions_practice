//// time complexity

function someopreration(n){
    //3 operation perform = > 0(1) notation  : operation are constant
    return(n * (n+5))/2
}
// console.log(someopreration(5));




function GoingDown(n){
    // 2n + 3 operation => 0(n)
    console.log("going forward");
    for (let i = 0; i < n; i++) {
        console.log(i);
        
    }
};

// console.log(GoingDown(5));



///////

function printBoth(n){
    // n *n  ( n^2 )operation => o(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i,j);
            
        }
        
    }
}
// console.log(printBoth(3));

//Space complexity

const funnynumber = (array) => {
    let sum = 0;
    for (let i = 0; i <  array.length; i++) {
       sum += array[i];
    }
    return sum
}

let score = [275,208,86,52];
console.log(funnynumber(score));


const funnynumberArray = (n) =>{
    const array =[];
    for (let i = 0; i < n; i++) {
        array.push(i*69);
        
    }
    return array;
};

console.log(funnynumberArray(5));



