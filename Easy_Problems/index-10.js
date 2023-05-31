//Problem - To Be or Not to be

//Write a function expect that helps developers test their code. 
//It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".



function expect(val){

    const toBe = (a) => {
        if(val === a){
            return true
        } else {
            throw new Error("Not Equal")
        }
    }

    const notToBe = (b) => {
        if( val !== b){
            return true ;
        } else {
            throw new Error("Equal");
        }
    }

    return {toBe, notToBe}
}

console.log(expect(5).toBe(5)); // true
console.log(expect("g").notToBe(null)); // true
console.log(expect(5).notToBe(5)); // throw Equal