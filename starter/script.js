'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthyear}`;
    console.log(output);

    //lets create a block(which generates a block scope)
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope's variable
      const firstName = 'Emma';

      //reassigning the value of a variable from  a parent scope inside of an inner scope
      output = `NEW OUTPUT!`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); //it will log Emma because JS tries to look for the variable in the current scope

      //lets prove that functions are also block-scoped starting in ES6 but only true for strict mode
      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str) we get a reference error because const and let are block-scoped so they  accesible or available only inside the block in which they were created
    console.log(millenial); //it works because var is function-scoped   . we are still in the same function, so the scope of the millenial variable is the entire function no matter if it was declared inside of a block or not

    // add(2, 3); // ReferenceError
    // console.log(add(2, 3));
    console.log(output); // it works because we maniupulated an existing variable inside of an inner scope
  }
  printAge();
  return age;
}

const firstName = 'Ehi';
calcAge(1991);
// console.log(age);
// printAge()  in the global scope, we do not have access to variables defined in any other scope

//HOISTING AND TDZ IN PRACTICE

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ehi';
let job = 'Developer';
const year = 2006;

// Functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
