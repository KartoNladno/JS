let x = 5;

let y = 'hello';

let z = true;

let w = null;

let v;

console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (z));
console.log(typeof (w));
console.log(typeof (v));

//2

let num1 = `10`;
let num2 = `20.5`;
let num3 = `30px`;

console.log(Number(num1));
console.log(parseInt(num2));
console.log(parseInt(num3));

//3


let num4 = `10.5`;
let num5 = `20`;
let num6 = `30.25px`;

console.log(Number(num4));
console.log(Number(num5));
console.log(parseFloat(num6));


// 4

const userName = `John`;
const age = 30;
console.log(`My name is ${userName}, i am ${age} y.o.`);

//5

alert(`Я изучаю JS`);

//6

let num = 123;
alert(num);

//7
let a = 1 + 2 + 3;
alert(a);

//8
let firstNumb = prompt(`Введите первое число`, [100]);
let SecNumb = prompt(`Введите второе число`, [100]);
let sum = (+firstNumb + +SecNumb);
let res = (firstNumb - SecNumb);
let дел = (firstNumb / SecNumb);
let mult = (firstNumb * SecNumb);
console.log(sum);
console.log(res);
console.log(дел);
console.log(mult);



