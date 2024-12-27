// Chapter NO. 9  "USER INPUT & CONDITIONAL STATEMENT" 


// Question No. 1: 

// let city = prompt("Enter Your City Name");


// if (city == `karachi`) {
//     alert("Welcome to city of light")
// } else {
//     alert("please enter a valid name")
// }



// Question No. 2:


// let gender = prompt("Please Write Your Gender");

// if (gender === "male") {
//     alert("Good Morning Sir.")
// } else if (gender === "female") {
//     alert("Good Morning Ma’am.")
// }


// Question No. 3:


// let signal = prompt("Select Your Colour  (🔴, 🟡 , 🟢)");

// if (signal === "red") {
//     document.write(`
//         <table>
//         <tr>
//         <th>Signal Colour</th>
//         <th>Message</th>
//         </tr>
//         <tr>
//         <td>Red</td>
//         <td>Must Stop</td>
//         </tr>
//         </table>
//         `)
// } else if (signal === "yellow") {
//     document.write(`
//         <table>
//         <tr>
//         <th>Signal Colour</th>
//         <th>Message</th>
//         </tr>
//         <tr>
//         <td>Yellow</td>
//         <td>Ready To Move</td>
//         </tr>
//         </table>
//         `)    
// } else if (signal === "green") {
//     document.write(`
//         <table>
//         <tr>
//         <th>Signal Colour</th>
//         <th>Message</th>
//         </tr>
//         <tr>
//         <td>Green</td>
//         <td>Move Now</td>
//         </tr>
//         </table>
//         `)    
// } else {
//     alert("Please Only Select Between:\n(Red,Yellow Or Green Colour!)")
// }



// Question No. 4:

// let fuel = +prompt("Enter Remaining Fuel In Your Car\n(*In Litres) ")

// if (fuel <= 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("Good To Go!")
// }



// Question No. 6:


// let marks = +prompt("Enter your Obtained Marks");
// let totalMarks = 300;

// let percentage = marks / totalMarks  * 100;
// let sum = percentage;

// if (percentage >= 80 && percentage <= 100) {
//     document.write(`<h1>Marks Sheet</h1><br> 
//         Total Marks: ${totalMarks}<br>
//         Marks Obtained: ${marks}<br>     
//         Percentage: ${percentage}%<br>
//         Grade: A-One<br>
//         Remarks: Excellent.<br>`)
// } else if (percentage >= 70 && percentage <= 80) {
//     document.write(`<h1>Marks Sheet</h1><br> 
//         Total Marks: ${totalMarks}<br>
//         Marks Obtained: ${marks}<br>     
//         Percentage: ${percentage}%<br>
//         Grade: A<br>
//         Remarks: Good.<br>`)
// } else if (percentage >= 60 && percentage <= 70) {
//     document.write(`<h1>Marks Sheet</h1><br> 
//         Total Marks: ${totalMarks}<br>
//         Marks Obtained: ${marks}<br>     
//         Percentage: ${percentage}%<br>
//         Grade: B<br>
//         Remarks: You need to improve.<br>`)
// } else {
//     document.write(`<h1>Marks Sheet</h1><br> 
//         Total Marks: ${totalMarks}<br>
//         Marks Obtained: ${marks}<br>     
//         Percentage: ${percentage}%<br>
//         Grade: Fail<br>
//         Remarks: Sorry.<br>`)
// }



// Question No. 7:

// let secret = 7;
// let number = +prompt("Guess A Number Between (1 to 10):")

// if (number === secret) {
//     alert("Bingo! Correct answer.")
// } else if (number + 1 === secret) {
//     alert("Close enough to the correct answer.")
// } else {
//     alert("Oops! The Correct Answer was " + secret + "." + "\nBetter Luck Next Time!")
// }



// Question No. 8:

// let num = +prompt("Enter A Random Number")

// if (num % 3 === 0) {
//     alert("The number" + num + " is divisible by 3.")
// } else (
//     alert("Sorry " + num + " is not divisible by 3.")
// )



// Question No. 9:

// let num = +prompt("Enter Your Number")


// if (num % 2 === 0) {
//     alert(num + " is a even number.")
// } else {
//     alert(num + " is an odd number.")
// }



// Question No. 10:

// let temp = +prompt("Enter Your Outside Temperature");

// if (temp >= 40) {
//     alert("It is too hot outside.")
// } else if (temp >= 30) {
//     alert("The Weather today is Normal.")
// }  else if (temp >= 20) {
//     alert("Today's Weather is cool.")
// }  else if (temp >= 10) {
//     alert("OMG! Today's weather is so Cool.")
// }else if (temp >= 1) {
//     alert("OMG! Today's weather is Super Cool.")
// } else (
//     alert("Please Input a valid number")
// )



// Question No. 11:

// let firstNumber = +prompt("Enter Your 1st Number");
// let opt = prompt("Please Select An Operator: \n +, -, *, /");
// let secondNumber = +prompt("Enter Your 2nd Number ");


// if (opt == "+") {
//     alert(firstNumber + secondNumber)
// } else if (opt == "-") {
//     alert(firstNumber - secondNumber)
// } else if (opt == "*") {
//     alert(firstNumber * secondNumber)
// } else if (opt == "/") {
//     alert(firstNumber / secondNumber)
// } else {
//     alert("Please Enter A Number")
// }





// CHAPTER NO. 12&13  "IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS"


// Question No. 1:

// let input = prompt("Enter a character:");

// let asciicode = input.charCodeAt();

// if (asciicode >= 97 && asciicode <= 122) {
//     document.write(input + " is in lower case")
// } else if (asciicode >= 65 && asciicode <= 90) {
//     document.write(input + " is in upper case")
// } else if (asciicode >= 48 && asciicode <= 57) {
//     document.write(input + " is a number")
// } else {
//     alert("Please enter a valid character")
// }



// Question No. 3:

// let num = +prompt("Enter A Random Number");

// if (num >= 1) {
//     document.write(num + " Is a positive number.")
// } else if (num == 0) {
//     document.write(num + " (It's a zero)")
// } else if (num <= -1) {
//     document.write(num + " It is a negative number")
// } else {
//     alert("Please Only Enter A Number")
// }



// Question No. 5:


// let pass = "pakistan";

// let password = prompt("Enter Your Password:");

//  if (password === pass) {
//     alert("Correct! The password you entered matches the original password.")
// } else if (!password) {
//     alert("Please enter your password")
// } else {
//     alert("Incorrect password.")
// }



// Question No. 6:

// Only "{}" is missing in else statement

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }



// Question No. 7:

// let time = prompt("Enter Your Time In 24 Hour's Clock Format.");


// if (time === null || time === "") {
//     alert("Please enter your time");
// } else {
//     time = +time;

//     if (time >= 0000 && time <= 1200) {
//         alert("Good Morning");
//     } else if (time >= 1200 && time <= 1700) {
//         alert("Good afternoon");
//     } else if (time >= 1700 && time <= 2100) {
//         alert("Good evening");
//     } else if (time >= 2100 && time <= 2359) {
//         alert("Good night");
//     }

// }

