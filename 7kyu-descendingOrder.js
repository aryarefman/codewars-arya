// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// const descendingOrder = n => {
//     const string = n.toString().split('').sort((a, b) => b - a).join('');
//     const number = parseInt(string);
//     return number;
// }


const descendingOrder = n => parseInt(n.toString().split('').sort((a, b) => b - a).join(''));

console.log(descendingOrder(1209856))