'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthyear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ehi';
calcAge(2006);
// console.log(age);
// printAge()  in the global scope, we do not have access to variables defined in any other scope
