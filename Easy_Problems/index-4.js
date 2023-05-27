//Given an integer array arr and a filtering function fn, 
//return a new array with a fewer or equal number of elements.

//The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

//Please solve it without the built-in Array.filter method.

function filterArray(arr, fn){

    const filteredArray = [];

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i,arr)){
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

const num = [5,10,20,30,40,50] ;

function greaterThan10(n){
    return n > 10;
}

// fn can also accept index of each element
function index0(n,i){
    return i === 0 ;
}

//falsy values such as 0 is filtered out
function minus20(n){
    return n - 20 ;
}

console.log(filterArray(num, greaterThan10));
console.log(filterArray(num, index0));
console.log(filterArray(num, minus20));