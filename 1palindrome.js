//palindrm problem
// An integre is palindrome when  its reads the same as backward.

// input : x = 121  ----------> True
// input : Y = 10 ------------> False

const ispolindrom = function(x){
    if(x<0) return false;
    return x === +x.toString().split("").reverse().join("")
}

const result = ispolindrom(-10);
console.log(result);





//Without using revers function



// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {


//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return ` ${string} : It is not a palindrome`;
//         }
//     }
//     return 'It is a palindrome';
// }x

// // take input
// const string = 121;

// // call the function
// const value = checkPalindrome(string);

// console.log(value);
