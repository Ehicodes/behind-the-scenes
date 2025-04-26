'use strict';

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthyear}`;
//     console.log(output);

//     //lets create a block(which generates a block scope)
//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       //creating new variable with same name as outer scope's variable
//       const firstName = 'Emma';

//       //reassigning the value of a variable from  a parent scope inside of an inner scope
//       output = `NEW OUTPUT!`;

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str); //it will log Emma because JS tries to look for the variable in the current scope

//       //lets prove that functions are also block-scoped starting in ES6 but only true for strict mode
//       function add(a, b) {
//         return a + b;
//       }
//     }

// console.log(str) we get a reference error because const and let are block-scoped so they  accesible or available only inside the block in which they were created
// console.log(millenial); //it works because var is function-scoped   . we are still in the same function, so the scope of the millenial variable is the entire function no matter if it was declared inside of a block or not

// add(2, 3); // ReferenceError
// console.log(add(2, 3));
// console.log(output); // it works because we maniupulated an existing variable inside of an inner scope
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Ehi';
// calcAge(1991);
// console.log(age);
// printAge()  in the global scope, we do not have access to variables defined in any other scope

//HOISTING AND TDZ IN PRACTICE

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Ehi';
// let job = 'Developer';
// const year = 2006;

// Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// we get  an error message that addArrow is not a function, that is because we basically  called undefined(2,3) because we use var

//Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

//avoid using var to declare variables

//LITTLE DIFFERENCE BETWEEN  let, const and var
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);
//variabes created with var will create a property on the global window object and that can have some implications in some cases.
//variables created with let and const will not create a property on the global window object

//THE THIS KEYWORD IN PRACTICE
// console.log(this); //this keyword in the global scope will be  the global object

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   // console.log(this);
// };

// calcAge(1991); //regular function call(a call of the function without it being attached to any object) in the strict mode will point to undefined

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   // console.log(this);
// };

// calcAgeArrow(1980); //it will  point to the parent..windows object. it uses  the lexical this keyword of the parent which is console.log(this) at the top

// const ehi = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// ehi.calcAge(); //the this keyword in a method will be the object calling the method

//FINAL EXAMPLE
//PROOD THAT THE THIS KEYWORD ONLY POINTS TO THE OBJECT CALLING THE METHOD
// const bimbo = {
//   year: 2017,
// };

// bimbo.calcAge = ehi.calcAge;
// bimbo.calcAge();

//COMPLETELY TAKING THE FUNCTION OUT OF THE EHI OBJECT
// const f = ehi.calcAge;
// f(); // REGULAR FUNCTION CALL, SO WE  GET AN ERROR MESSAGE OF UNDEFINED

//PITFALLS OF THE THIS KEYWORD RELATED TO REGULAR FUNCTIONS VS ARROW FUNCTIONS
// var firstName = 'Matilda';
// const ehi = {
//   firstName: 'Ehinomen',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// ehi.greet();
//DO NOT USE VAR and DO NOT USE ARROW FUNCTIONS AS A METHOD

//EXAMPLE 2. HAVING FUNCTIONS INSIDE OF A METHOD
const ehi = {
  firstName: 'Ehinomen',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

ehi.calcAge();

//ARGUMENTS KEYWORD

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 6, 10, 4);

var addArrow = (a, b) => a + b;

//does not work for arrow functions

//PRIMITIVES Vs OBJECTS (PRIMITIVES Vs REFERENCE TYPES)
let age = 17;
let oldAge = age;
age = 18;
console.log(age);
console.log(oldAge); //STILL 17 BECAUSE AGE WAS STILL 17   AT THE POINT WHEN THE OLDAGE WAS SET SO CHANGING THE AGE FROM 17 TO 18 DID NOT AFFECT THE OLDAGE VARIABLE

//scenario 2

const me = {
  name: 'Jonas',
  age: 18,
};

const friend = me;

friend.age = 19;
console.log('Friend', friend);
console.log('Me', me); //both objects have the same age which is strange instead of the friend's to be different.   the reason is the 'me' and 'friend'  point to the same object in the memory heap. they are just basically two unique identifiers pointing to the same value, which is the memory address in the call stack
//  which then points to the reference in the memory heap

//PRIMITIVES VS OBJECTS IN PRACTICE
//primitve types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName);
// console.log(oldLastName);

//objects/ reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davies';
// console.log('Before Marriage:', jessica);
// console.log('After marriage:', marriedJessica);

//lets copy the object so we can be able to change one of them without changing the other. (copying objects)
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//we can use a function called object.assign to copy the object. What it does is to  essentially merge two objects and  then return a new one

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';

//object.assign provides  a shallow copy and  has some problems, e.g manipulating an object within an object

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Push');

console.log('Before Marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
