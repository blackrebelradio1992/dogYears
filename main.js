// this creates the variable myAge
const myAge = 29;
// this creates the variable earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
//this set the value of laterYears
let laterYears = myAge - 2;
//this changes the value of laterYears
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//this sets a value for myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;
//this sets the value 'Frank Gary' to myName and attaches the method .toLowerCase
let myName = 'Frank Gary'.toLowerCase();
// prints to the console using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
