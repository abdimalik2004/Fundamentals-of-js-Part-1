/* 
// let js = 'amazing';
// alert('JavaScript is for FUN!')
40+8+23-10;
console.log(40+8+23-10);
// LECTURE: Values and Variables
let firstName = 'Abdimalik';

let myFristJob = "Coder";
let myCurentJob = 'Programer';

console.log(firstName);

// LECTURE: Data Types
/* There are 7 Data Types 
- Number : Floating point numbers and it's used for decimal and integers like let age = 19;
- String : Sequance of characters and it's used for text like  let fristName = 'Abdimalik';
- Boolean Logical type that can only be true or false used for taking decisions let fullAge =  true;
- Undefined ;
- Null ;
- Symbol ;
- Bigint ; 

let jS = true;
console.log(jS);

console.log(typeof true);
console.log(typeof jS);
console.log(typeof 19);

//Dynamic typing

jS = 'Yes';

// LECTURE: let, const and var
// this case called reasigning value of variable or mutation;
let age = 18;
age = 19;
//  when you use const for declaring a variable and you can't change again ;
const birthYear = 2004;

console.log(age);
console.log(birthYear);

// LECTURE 13 Basic operators

// math operators
let x = 10 + 5;
x += 10; // x = x + 10 res 25
x *= 4; // x = x * 4 res 100
x++;
x--;
console.log(x);
// comparison operator
console.log(ageAbdimalik > asiyaAge);
console.log(ageAbdimalik < 19);

console.log(now - 2004 < now - 2005);

// Lecture 14  Operator presedence

let g, y;
g = y = 25 - 10 - 5;
console.log(g);
const avgAge = ageAbdimalik + asiyaAge / 2;
console.log(ageAbdimalik, asiyaAge, avgAge);

// LECTURE 17: Strings and Template Literals
const fristName = 'Abdimalik';
const job = 'Coder';
const birthYear = 2004;
const year = 2023;
const abdimalik = "I am " + fristName + ', a ' + [year - birthYear] + ' year old ' + job + ' !.';

console.log(abdimalik);

const abdiNew = `I am ${fristName}, a ${year - birthYear} year old ${job} !.`;
console.log(abdiNew);

console.log('string with \n\
multiple \n\
lines \n\ ');
console.log(`strings
multiple 
lines`);

// LECTURE 18: Taking Decisions: if / else Statements
const age = 13;

if (age >= 18) {
    console.log('Abdimalik can get driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Abdimalik is too young wait another ${yearsLeft} years `);
}
const birthYear = 2004;
let centery;
if(birthYear <= 2000) {
     centery = 20;
} else {
     centery = 21;
}
console.log(centery);

// LECTURE 20: Type Conversion and Coercion
//  type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 , '1991'
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Abdimalik')); // NaN


console.log(String(23), 23);

// type coertion
console.log(' I am ' + 23 + " years old");
console.log(' I am ' + String(23) + " years old");

console.log('23' - '10' - '3');
console.log('23' / '2');


let n = '1' + 2;
n = n - 1;
console.log(n);

// Lecture 21: Truthy and Falsy Values
// 5 False values: 0, '', undefined, null NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean({})); // true
console.log(Boolean("Abdimalik"));// false
const money = 200;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
};

let height = 1.74;
if (height) {
    console.log("YAY! height is defined")
} else {
    console.log("height is Undefined")
}

// Lecture 22:Equality Operators: == vs. ===
const age = 18;
if (age === 18) console.log("You just become an adult (strict)");
if (age == "18") console.log("You just become an adult (loose)");

const fav =  Number(prompt("what is your fav number?"));
console.log(fav);
console.log(typeof(fav));

if (fav === 23) {  // 23 = 23 couse of Number functins wich changes strings to numbers
    console.log("Cool 23 is an amaizing number")
} else if(fav === 7) {
    console.log("7 is also a cool number")
} else if(fav === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("Number is not 23 or 7 or 9")
}

if (fav !== 23) console.log("Why not 23");

// LECTURE 23: Logical Operators
it was an explanation only 

// LECTURE 24: Logical Operators
const hasDriverLiccense = true;
const hasGoodVision = true;

console.log(hasDriverLiccense && hasGoodVision);
console.log(hasDriverLiccense || hasGoodVision);

const shouldDrive = hasDriverLiccense && hasGoodVision;
if (hasDriverLiccense && hasGoodVision) {
     console.log("Abdimalik is able to drive")
} else {
     console.log("Someone else should drive")
}

const isTired = false;
console.log( hasDriverLiccense || hasGoodVision || isTired);
if (hasDriverLiccense && hasGoodVision && !isTired) {
    console.log("Abdimalik is able to drive")
} else {
    console.log("Someone else should drive")
}
// LECTURE 26: switch statement
const day = 'monday';
switch(day) {
    case 'monday':
        console.log('Plan course structre');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory ');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('write code examples');
        break
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day')
}


if (day === 'friday') {
    console.log('Plan course structre');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory ');
}  else if (day === 'wednesday' || 'thrusday') {
    console.log('write code examples');
}  else if (day === 'friday') {
    console.log('Record videos');
}  else if (day === 'saturday' || 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('Not a valid day');
}

// LECTURE 27: Statements and Expressions
// was explanation
// LECTURE 28: The Conditional (Ternary) Operator
const age = 19;
// age >= 18 ? console.log('I like to drink tea') :
// console.log('I like to drink water');

const drink = age >= 18 ? 'tea' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'tea'
} else {
    drink2 = 'water'
}
console.log(drink2);
console.log('I like to drink ${age >= 18 ? "tea" : "water"}');
// LECTURE 28 and 29 were coding challenge and challenge solution
// LECTURE 30  was explanation of how different js releases interact and work 
*/
