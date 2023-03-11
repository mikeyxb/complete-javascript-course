///////////////////////////////////////////////
// coding challenge 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

test data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
test data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/* 
let markMass = 78;
const markHeight = 1.69;
let johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(`Marks BMI = ${markBMI}`, `, Johns MBI = ${johnBMI}`, `, does mark have a higher BMI? ${markHigherBMI}`); */
/* 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;

const jonas = "I'm " + firstName + ', a ' + (2037 - birthYear) + ' years old ' + job + '!';

console.log(jonas)

const jonasNew = `i'm ${firstName} a ${2037 - birthYear} year old ${job}!`
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`); */

/* const age = 19;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); */


// let markMass = 78;
// const markHeight = 1.69;
// let johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// let resultMark = markBMI.toFixed(1.1) // added this and the bottom one for better visual decimal
// let resultJohn = johnBMI.toFixed(1.1)

// //const markHigherBMI = markBMI > johnBMI;

// //console.log(`Marks BMI = ${markBMI}, Johns MBI = ${johnBMI}, does mark have a higher BMI? ${markHigherBMI}`);
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${resultMark}) is more than John's BMI (${resultJohn})`)
// } else {
//     console.log(`John's BMI (${resultJohn}) is more than Mark's BMI (${resultMark})`)
// }


// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('i am + 23 ')