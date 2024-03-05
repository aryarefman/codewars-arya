// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascri

// const alphabetPosition = text => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const result = [];
  
//     for (let i = 0; i < text.length; i++) {
//       const char = text[i];
//       const lowerChar = char.toLowerCase();
  
//       if (alphabet.includes(lowerChar)) {
//         const position = alphabet.indexOf(lowerChar) + 1;
//         result.push(position);
//       }
//     }
  
//     return result.join(" ");
// }


// const alphabetPosition = text => {
//     var result = "";
//     for (var i = 0; i < text.length; i++){
//       var code = text.toUpperCase().charCodeAt(i)
//       if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
  
//     return result.slice(0, result.length-1);
// }


let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));