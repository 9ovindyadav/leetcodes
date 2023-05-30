//Problem - Roman to integer


function romanToInteger(romanNumber){

    const numeralValues = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let result = 0 ;
    for(let i=0; i < romanNumber.length ; i++){
          const currentSymbol = romanNumber[i];
          const currentValue = numeralValues[currentSymbol];
          const nextSymbol = romanNumber[i+1];
          const nextValue = numeralValues[nextSymbol];

          if(nextValue && currentValue < nextValue){
            result -= currentValue ;
          } else {
            result += currentValue ;
          }
    }
    return result ;
}

console.log(romanToInteger("XII"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));