// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n){
    for(let i=0;i<=15;i++)
        if(i%3==0 && i%5==0) console.log('fizzbuzz');
       else if(i%3==0 ) console.log('fizz');
       else if(i%5==0) console.log('buzz');
       else console.log(i);
}
fizzBuzz()