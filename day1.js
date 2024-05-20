//*******Problem 1"
// let num = prompt("Enter a Number: ");

// if (num % 5 === 0) {
//   alert("The Number is multiple by 5!");
// } else {
//   alert("Numbre is not a multiple of 5!");
// }

//*********problem 2

// let mark = prompt("Enter a Marks:");

// if ((mark >= 90) & (mark <= 100)) {
//   alert("A");
// } else if (mark >= 80) {
//   alert("B");
// } else if (mark >= 35) {
//   alert("C");
// } else if (mark >= 0) {
//   alert("D");
// } else {
//   alert("Invalid input!");
// }

//*****for-of loop

// let str = "Hello World!";

// for (let i of str) {
//   console.log("i = ", i);
// }

//*******for in loop */

// let student = {
//   name: "Siddhesh",
//   age: "22",
//   cgpa: "7.5",
//   isPass: true,
// };

// for (let key in student) {
//   console.log("Key =", key, " value =", student[key]);
// }

/****Problem 3: even Numbers */

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//*******problem 4: Guess Number */

// let guessNum = Math.floor(Math.random() * 10);

// for (let i = 9; i >= 0; i--) {
//   let num = parseInt(prompt("Enter a Guess Number:"), 10);

//   if (num === guessNum) {
//     console.log("Won the Match!");
//     break;
//   } 
//   else {
//     console.log("Wrong Answer!", num, " - you have", i, "chances left");
//   }
// }

// console.log("The correct answer was", guessNum);
