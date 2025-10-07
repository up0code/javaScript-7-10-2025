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

let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(`Today is ${day}`);