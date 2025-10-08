// console.log("Hello world");


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




  function condition(){
    let age = 20;
    if(age === 18){
      
      console.log('nnnnnnn'); // يشتغل
    }
  

    else{
    console.log("You are a minor.");
  }

  }

    condition();

  