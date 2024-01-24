// https://www.codewars.com/kata/56747fd5cb988479af000028

// const getMiddle = s => {
//     const middleIndex = Math.floor(s.length / 2);
//     const evenWord = s.length % 2 === 0;
//     if (evenWord) {
//         return s.substr(middleIndex - 1, 2);
//     } else {
//         return s.charAt(middleIndex);
//     }
// }


const getMiddle = s => {
    return s.substr(Math.ceil(s.length / 2 - 1), (s.length % 2 === 0) ? 2 : 1);
}

console.log(getMiddle('melanie'));
console.log(getMiddle('Arya'));