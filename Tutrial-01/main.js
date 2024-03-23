// let a = 10;

// function outer() {
//           let b = 20;

//           function inner() {
//                     let c = 30;
//                     console.log(a,b,c);
                    
//           }
//           inner();
// }
// outer();

// function outer() {
//     let counter = 0;

//     function inner() {
//         counter++;
//         console.log(counter);
//     }

//     return inner; // Return inner function
// }

// const fn = outer(); // fn now holds the reference to the inner function
// fn(); // Output: 1
// fn(); // Output: 2



function sum(a, b, c) {
          return a+b+c
}

console.log(sum(2,3,5));


