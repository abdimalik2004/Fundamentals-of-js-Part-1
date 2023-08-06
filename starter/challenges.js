/*
// CHALLENGE #1 
const massMark = 78;
const heightMark = 1.69; // meters
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
 
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn,markHigherBMI);

// The challenge in my trying
const culeskaAbdimalik = 66;
const culeskaAsiya = 50;
const dhirirkaAbdimalik = 1.74;
const dhirirkaAsiya = 1.65;

const BMIAbdimalik = culeskaAbdimalik / (dhirirkaAbdimalik ** 2);
const BMIAsiya = culeskaAsiya / (dhirirkaAsiya ** 2);
const abdimalikKaBadanAsiya = BMIAbdimalik > BMIAsiya;  
console.log(BMIAbdimalik, BMIAsiya, abdimalikKaBadanAsiya);
*/
// CHALLENGE #2 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
console.log("Mark's BMI is higher than John's!");

console.log(`mark's BMI ${massMark} is higher than John's ${massJohn}`);

// Another way
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Jhon's BMI is higher than Mark's");
}