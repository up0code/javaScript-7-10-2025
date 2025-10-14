// console.log("Hello world");


// let sum = 0;
// let i = 2; // Start from first even number
// while (i <= 100) {
//     sum += i;
//     i += 2; // Jump to next even number
// }
// console.log(sum); // Output: 2550





// console.log(num);
//  console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);
// console.log(x++);
// console.log(++x);
// console.log(x--);
//  console.log(--x);
//  console.log(x);
//  console.log(x+=y);
//  console.log(x-=y);
//  console.log(x*=y);
//  console.log(x/=y);
//  console.log(x%=y);
//  console.log(x**=y);
//  console.log(x==y);
//  console.log(x===y);
//  console.log(x!=y);
//  console.log(x!==y);
//  console.log(x>y);
//  console.log(x<y);
//  console.log(x>=y);
//  console.log(x<=y);
//  console.log(x&&y);
//  console.log(x||y);
//  console.log(!x);
//  console.log(!y);
//  console.log(typeof x);
//  console.log(typeof y);
//  console.log(typeof "Hello world");
//  console.log(typeof true);
//  console.log(typeof false);
//  console.log(typeof null);
//  console.log(typeof undefined);
//  console.log(typeof {});
//  console.log(typeof []);
//  console.log(typeof function(){});
//  console.log(typeof NaN);
//  console.log(typeof Infinity);
//  console.log(typeof -Infinity);
 
//     console.log(x instanceof Number);
//     console.log(y instanceof Number);
//     console.log("Hello world" instanceof String);
//     console.log(true instanceof Boolean);
//     console.log(false instanceof Boolean);
//     console.log(null instanceof Object);
//     console.log(undefined instanceof Object);
//     console.log({} instanceof Object);
//     console.log([] instanceof Array);
//     console.log(function(){} instanceof Function);
//     console.log(NaN instanceof Number);
//     console.log(Infinity instanceof Number);
//     console.log(-Infinity instanceof Number);   





// let magdi = 40;
// const newLocal = magdi = 18;
// if(newLocal >= 18){
//     console.log("You are not allowed to drive");
// }
//  else if(magdi === 18){     console.log("You are allowed to drive with a learner's permit");
//  }
//  else{
//    console.log("You are allowed to drive");
//  }


// let magdi = 80;
// if(magdi <= 18){
//     console.log("You are not allowed to drive");
// }
//  else if(magdi >= 28){   
//       console.log("You are allowed to drive with a learner's permit");
//  }
//  else{
//    console.log("You are allowed to drive");
//  }


// let age = 25;
// let magdi = (age > 18) ? "You are not child" : "You are adult";
// console.log(magdi);

// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }
// console.log(`Today is ${day}`);
// 

// let mahdi = 40;
// let magdi = 18;

// if (magdi >= 18) {
//   // First condition: magdi is at least 18
//   if (magdi === 18) {
//     console.log("You are allowed to drive with a learner's permit");
//   } else {
//     console.log("You are allowed to drive");
//   }
// } else {
//   console.log("You are not allowed to drive");
// }

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Mahdi")); // Output: Hello, Mahdi!
// console.log(greet("Magdi")); // Output: Hello, Magdi!   
// this is local scope
// function myfunction() {
//   console.log('how are you');
// }
//  myfunction(); // Output: how are you

//  let x = 'mqagdi';
//  function printname() {
//    console.log(x);
//  }
//  printname(); // Output: mqagdi

//  function outerFunction() {
//    let outerVariable = 'I am from the outer function';

//    function innerFunction() {
//      let innerVariable = 'I am from the inner function';
//      console.log(outerVariable); // Accessing outer function variable
//      console.log(innerVariable); // Accessing inner function variable
//    }

//    innerFunction();
//    // console.log(innerVariable); // This would cause an error
//  }

//  outerFunction();

//  let x = 10; // Global scope

//  function myFunction() {
//    let y = 20; // Local scope
//    console.log(x); // Accessing global variable
//    console.log(y); // Accessing local variable
//  }

// function sayHello() {
//   console.log("Hello from global function!");
// }

// sayHello(); // يطبع: Hello from global function!
// console.log(window.sayHello); // يطبع محتوى الدالة (لأنها global)
// oops = () => {
//   console.log("I became global by mistake!");
// };

// oops(); // يشتغل
// console.log(window.oops); // موجود (global)


// function myFunction() {
//     return "Hello from myFunction!";
//   }
  
//   console.log(myFunction()); // يطبع: Hello from myFunction!
//   console.log(window.myFunction); // يطبع: undefined (لأنها مش global)
  
//   function outerFunction() {
//     function innerFunction() {
//       return "Hello from innerFunction!";
//     }
//     return innerFunction();
//   }
  
//   console.log(outerFunction()); // يطبع: Hello from innerFunction!
//   // console.log(innerFunction()); // يسبب خطأ (innerFunction مش موجودة في الglobal scope)


//   function myFunction() {
//     let localVar = "I am local!";
//     console.log(localVar); // يشتغل
//   }
  
//   myFunction();
//   // console.log(localVar); // يسبب خطأ (localVar مش موجودة في الglobal scope)


//   function outerFunction()



// let num = 12;prompt('but the number');
// console.log('1x'+num+'=',1*num);
// console.log('2x'+num+'=',2*num);
// console.log('3x'+num+'=',3*num);
// console.log('4x'+num+'=',4*num);
// console.log('5x'+num+'=',5*num);
// console.log('6x'+num+'=',6*num);
// console.log('7x'+num+'=',7*num);
// console.log('8x'+num+'=',8*num);
// console.log('9x'+num+'=',9*num);
// console.log('10x'+num+'=',10*num);
// console.log('11x'+num+'=',11*num);
// console.log('12x'+num+'=',12*num);

// this is for loop repiting its start from one to 9 ?

// for (let num = 1;num< 10; num++){
 
//   console.log('number',num);
// }

// this is for Number loop start from 100 to 1

//  for ( let num = 100 ; num>0;num--){
//   console.log('number',num)
//  }




// let = m =10;

// let a = 1 ;
//  for ( let n = 0 ; n<10;n++){
 
//   console.log( n+'x'+a+'=',n*a);
// }


// for ( let n = 1 ; n<10;n++){
//     console.log(n)
//     if (n===6){
//         console.log('number',n);
//         break;
//         // continue;
//     }
// }

// let i = 1;
// while(i<0){
//     console.log('hello');

//     1'++';

// }
 

// let i = 10;
// while(i<10){
//     console.log(i);
//     i++;
   
// } 

// let n = 10;

// do{
//     console.log(n);
//     n++;

// }while(n<=100);


// let sum = 0;
// let i = 1; 
// while (i <= 10) {
//     sum += i;
//     i ++; 
// }
// console.log(sum); 



// let sum = 1;
// let i = 1; 
// while (i <= 100) {
//     sum += i;
//     i ++; 
// }
// console.log(sum); 

// Get number from user input
// let num = prompt('Enter a number to see its multiplication table:');

// // Convert the input to a number
// num = Number(num);

// Display results in console
// console.log('Multiplication table for ' + num + ':');
// console.log('1 × ' + num + ' = ' + (1 * num));
// console.log('2 × ' + num + ' = ' + (2 * num));
// console.log('3 × ' + num + ' = ' + (3 * num));
// console.log('4 × ' + num + ' = ' + (4 * num));
// console.log('5 × ' + num + ' = ' + (5 * num));
// console.log('6 × ' + num + ' = ' + (6 * num));
// console.log('7 × ' + num + ' = ' + (7 * num));
// console.log('8 × ' + num + ' = ' + (8 * num));
// console.log('9 × ' + num + ' = ' + (9 * num));
// console.log('10 × ' + num + ' = ' + (10 * num));
// console.log('11 × ' + num + ' = ' + (11 * num));
// console.log('12 × ' + num + ' = ' + (12 * num));

// // Also display results on the webpage
// document.write('<h2>Multiplication Table for ' + num + '</h2>');
// for (let i = 1; i <= 12; i++) {
//     document.write(i + ' × ' + num + ' = ' + (i * num) + '<br>');
// }


// let a = prompt("Enter a number");
// if (a % 2 === 0) {
// console.log("even");
// } else {
// console.log("odd");
// }






// console.log("magdi");
// while (true) {
//     let a = prompt("first number:");
//     let me = prompt("enter the opareter   +, -, *, /, %");
//     let b = prompt("second number:");
//     if (me === '+') console.log(a + b);
//     else if (me === '-') console.log(a - b);
//     else if (me === '*') console.log(a * b);
//     else if (me === '/') console.log(a / b);
//     else if (me === '%') console.log(a % b);
//     if (!confirm("thank you so match")) break;
// }

// let magdi = true;
// while (magdi){
//     let num1 = parseFloat(prompt('Enter your first number'));
//     let  opareter = prompt('enter opareter '-' '+'/');
//     let num2 = parseFloat(prompt('Enter yur second number'));

//     let results;
//      if (opareter === '+');{
//          results = num1 + num2 ;
//      }
//       else if (opareter)

// }


// let magdi = true;

// while (magdi) {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let operator = prompt("Enter the operator (+, -, *, /, %):");
//     let num2 = parseFloat(prompt("Enter the second number:"));

//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             alert("Division by zero is not allowed!");
//             continue;
//         }
//     } else if (operator === '%') {
//         result = num1 % num2;
//     } else {
//         alert("Invalid operator!");
//         continue;
//     }

//     let parity = (result % 2 === 0) ? "Even" : "Odd";
//     alert("Result = " + result + "\nThe number is " + parity);

//     magdi = confirm("Do you want to perform another calculation?");
// }

// alert("Program ended. Thank you for using the calculator!");

let  m =10;

let a = 1 ;
 for (prompt( let n = 0 ; n<10;n++)){
 
   console.log( n+'x'+a+'=',n*a);
 }

 
