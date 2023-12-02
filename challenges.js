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

// CHALLENGE #2 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


console.log("Mark's BMI is higher than John's!");

console.log(`mark's BMI ${massMark} is higher than John's ${massJohn}`);

// Another way
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Jhon's BMI is higher than Mark's");
}

// CHALLENGE #3
// in my try
const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];
if(scoreKoalas > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}

// How the teacher solve it 
const scoreDolphins = (96 + 108 + 89) /3
const scoreKoalas = (88 + 91 + 110) /3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
}
*/
// CHALLENEGE #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);