//Problem - Palindrome

//Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x){
     let str = String(x);

     return str === str.split("").reverse().join("") ;
}

console.log(isPalindrome(33)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(583)); // false