// Before Values //

// Number //
let origNum = 14;
// String //
const origString = "this is my assignment";

// Render above original values to before section of page
document.querySelector("#number").innerText = origNum;
document.querySelector("#string").innerText = origString;

// Modified number values in after section

// #1 - Increasing original number by 12
document.querySelector("#after-number1").innerText = origNum += 12;
// #2 - Converting original number to an integer
document.querySelector("#after-number2").innerText = Number.parseInt(origNum);
// #3 - Checking if original number is an integer
document.querySelector("#after-number3").innerText = Number.isInteger(origNum);

// Modified string in after section

// #1 - Showing number of characters in string
document.querySelector("#after-string1").innerText = origString.length;

// #2 - Showing if string starts with 
document.querySelector("#after-string2").innerText = origString.startsWith("what");

// #3 - Showing first character of string
document.querySelector("#after-string3").innerText = origString.charAt(0);