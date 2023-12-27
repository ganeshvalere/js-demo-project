const name = "Ganesh"
const repoCount= 10

// console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String ('ganeshnew, lkdsf')
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring (-9,2)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "    Ganesh     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitech.com/hitech%20choudry"

console.log(url.replace('%20', '_'));

console.log(url.includes('hitech'));

console.log(gameName.split('_'));
