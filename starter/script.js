'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName); //this works because the variableis a global variable an it works even if the variable was defined after the function, this is because the code in the function is only executed when it is actually called and the calling happens after the declarationof the firstName variable. So at this point  in the code the firstName variable is ready in the global execution environment in the global scope, ready to be used
  return age;
}

const firstName = 'Ehi';
calcAge(2006);
