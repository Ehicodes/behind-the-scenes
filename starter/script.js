'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthyear}`;
    console.log(output);

    //lets create a block(which generates a block scope)
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      //lets prove that functions are also block-scoped starting in ES6 but only true for strict mode
      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str) we get a reference error because const and let are block-scoped so they  accesible or available only inside the block in which they were created
    console.log(millenial); //it works because var is function-scoped   . we are still in the same function, so the scope of the millenial variable is the entire function no matter if it was declared inside of a block or not

    add(2, 3); // ReferenceError
  }
  printAge();
  return age;
}

const firstName = 'Ehi';
calcAge(1991);
// console.log(age);
// printAge()  in the global scope, we do not have access to variables defined in any other scope
