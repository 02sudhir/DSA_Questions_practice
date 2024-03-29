

//valid anagram 
//anagram is  word or phrase fromed by rearrange the letter of  different word or phrase using originginal lettter


// input : (s: anagram) ,(t="nagaram"); true
// Input : ( s:"rat")  , (t="car"); false

// const isanagram= function(s,t){
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");

//     return s === t;


// }
// console.log(isanagram("anagram", "nagaram"));




// 2nd way

const isanagram2 = function (s,t){
    if(s.length !== t.length) return false;

    let obj1 ={};
    let obj2 ={};
    for (let i = 0; i < s.length; i++) {
        
        obj1[s[i]]= (obj1[s[i]]  ||  0 ) + 1 ;
        obj2[t[i]]= (obj2[t[i]]  ||  0 ) + 1 ;
    }
    for (const key in obj1) {
        if (obj1[key] !==  obj2[key]) return false; 
            
        }
        return true;
    };
console.log(isanagram2("anagram", "nagaram"));