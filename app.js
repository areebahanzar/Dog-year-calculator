//convert Areebah's age to dog years


// Areebah age
const myAge = 22;

//the first two years of a dogs life count as 10.5 dog years each. Each year following that is 4 dog years.The calculation is as follows:

//dog age of two human years
let earlyYears = 2;

//conversion of two human years to dog years
earlyYears *= 10.5;

//we already calculated dog years for the first two human years so subtract 2 years out of Areebahs age
let laterYears = myAge - 2;

//conversion of human years to dog years after the age of 2
laterYears *= 4;

//total dog years
myAgeInDogYears = earlyYears + laterYears;

//register name all lowercased
myName = 'Areebah'.toLowerCase();

//sentence explaining my age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
