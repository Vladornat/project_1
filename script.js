'use script';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false

// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
// 	console.log('ok!');
// } else{
//     console.log('Error');
       
// }

// УСЛОВИЯ

//  const nun = 50;

//  if (nun < 49){
//     console.log('Error');
//  } else if (nun > 100){
//     console.log('Many');
//  } else {
//     console.log('ok!'); 
//  }

//  (nun === 50) ? console.log('ok!') : console.log('Error');

//  switch (nun){
//     case 49:
//         console.log('Many');
//         break;
//     case 100:
//         console.log('Many');
//         break;
//     case 51:
//         console.log('ok');
//         break;   
//     default:
//         console.log('not');
//         break;
//  }
// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('I eat');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('All eat');
// } else {
//     console.log('go');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('All eat');
// } else {
//     console.log('go');
// }

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// ЦЫКЛЫ

// let nun = 50;

// while(nun <= 55) {
//     console.log(nun);
//     nun++;
// }

// do{
//     console.log(nun);
//     nun++; 
// }
// while(nun < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for(let j = 0; j < i; j++) {
//         result += '*'; 
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//         console.log(`First level: ${i}`);
//         for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 3; k++) {
//                 if (k === 2) continue first;
//                 console.log(`Third level: ${k}`);
//             }
//         }
//     }


    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // for (let i = 0; i < data.length; i++) {
    //     if (typeof(data[i]) === 'number') {
    //         data[i] = data[i] * 2;
    //     } else if (typeof(data[i]) === 'string') {
    //         data[i] = `${data[i]} - done`;
    //     }
    // }

    // console.log(data);
    // return data;

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }

    // console.log(result);
    // return result;

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }

    // console.log(result);
    // return result;
//     let nun = 20;

// ФУНКЦИИ

//     function showFirstMessage(text) {
//         console.log(text);
//         nun = 10;
//     }

//     showFirstMessage('Hello world');
//     console.log(nun);

//     // function calc(a, b) {
//     //     return (a + b);
//     // }

//     // console.log(calc(1, 5));
//     // console.log(calc(2, 5));
//     // console.log(calc(4, 5));

//     function ret() {
//         let num = 50;
//         return nun;
//     }

//     const logger = function() {
//       console.log('Hello');
//     };

//     logger();

//     const calc = (a, b) => a + b;

//     let a = 3
//  function addTwo(x) {
//    let ret = x + 2
//    return ret
//  }
//  let b = addTwo(a)
//  console.log(b)
// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion (res);


// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Антон');

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

// МЕТОДЫ

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str);

const str = 'teSt';

console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat (test));