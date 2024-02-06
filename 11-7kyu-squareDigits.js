// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// const squareDigits = num => {
//     const stringOfNum = num.toString();
//     const string = stringOfNum.split('').map(e => e * e).join('');
//     const number = Number(string);
//     return number;
// }


// const squareDigits = num => Number(num.toString().split('').map(e => e * e).join(''));


const squareDigits = num => Number(String(num).split('').map(e => e * e).join(''));

console.log(squareDigits(567));