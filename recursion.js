// recursion: function called itself again and again is called as recursion

// function recurse(x){
//    console.log(x);
//     if(x<5){
//         recurse(x+1);
//     }

// }
// let data=0;
// recurse(data)

//factorial

function factorial(item) {
  if (item == 0) {
    return 1;
  }
  return item * factorial(item - 1);
}
let data = 8;
console.log(factorial(data));
