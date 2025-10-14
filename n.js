// let sum = 1;
//  let i = 1; 
//  while (i <= 100) {
//     sum += i;
//      i ++; 

//  }

//  console.log(sum);


//  let sum = 0;
// let i = 10; 
//  while(i <= 90) {
//      sum += i;
//     i ++; 
//  }
// console.log(sum); 

// let sum = 0;
// let num = 0;
// for ( let i = 10 ; i<90;i++){
//      console.log()
//     if (i% i===0){
//         console.log('num',i ,0);
//          break;
//           continue;
//      }
//  }



// let sum = 0;
// let num = 0;
// Avarev ;

// for(let i = 10   ; i <=90,i++){
//   if(i% ===0)
// }


let total = 0;
let count = 0;

for (let i = 10; i <= 90; i++) {
    if (i % 2 === 0) {
        total += i;
        count++;
    }
}

let average = total / count;

console.log("Sum of even numbers: " + total);
console.log("Count of even numbers: " + count);
console.log("Average: " + average);