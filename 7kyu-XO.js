// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// function XO(str) {
//     let countX = 0;
//     let countO = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (char === 'x') {
//             countX++;
//         } else if (char === 'o') {
//             countO++;
//         }
//     }
//     return countX === countO;
// }


// const XO = str => {
//     const char = str.toLowerCase().split('');
//     return char.filter(e => e === 'x').length === char.filter(e => e === 'o').length;
// }


const XO = str => str.match(/x/ig).length === str.match(/o/ig).length;

console.log(XO('xXoo'));
console.log(XO('xXXoO'));