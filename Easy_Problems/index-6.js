//Problem - Check if Object Instance of Class

//Write a function that checks if a given value is an instance of a given class or superclass. 
//For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
//There are no constraints on the data types that can be passed to the function. 
//For example, the value or the class could be undefined.

function isInstanceOf(obj,className){
    if (obj === null || obj === undefined) {
        return false;
      }
    
      if(className === null || className === undefined) {
        return false;
      }
    
      const prototype = Object.getPrototypeOf(obj);
      const classPrototype = className.prototype;
    
      // Check if the prototype chain includes the class prototype
      if (prototype === classPrototype) {
        return true;
      }
    
      let currentPrototype = prototype;
      while (currentPrototype !== null) {
        if (currentPrototype === classPrototype) {
          return true;
        }
        currentPrototype = Object.getPrototypeOf(currentPrototype);
      }
    
      return false;
}

class Animal {};
class Dog extends Animal {};

console.log(isInstanceOf([],null)); //false
console.log(isInstanceOf(5,Number)); //true
console.log(isInstanceOf(new Dog(),Animal)); //true
console.log(isInstanceOf(new Date(),Date));  //true
console.log(isInstanceOf(Date,Date)); //false