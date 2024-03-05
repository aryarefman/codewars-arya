// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// const duplicateCount = text => {
//     const charSet = new Set();
//     const duplicateSet = new Set();

//     for ( char of text.toLowerCase() ) {
//         if (charSet.has(char)) {
//             duplicateSet.add(char);
//         } else {
//             charSet.add(char);
//         }
//     }
//     return duplicateSet.size;
// }

// const duplicateCount = (text) => {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter((e, i, array) => array.indexOf(e) !== i && array.lastIndexOf(e) === i).length;
// };

const duplicateCount = text =>
      (text
        .toLowerCase()
        .split('')
        .sort()
        .join('')
        // /([^])\1+/g : ambil karakter yang jumlahnya lebih dari satu / berduplikat
        // [] : untuk mengubah hasil yang bernilai 'null' menjadi array kosong
        .match(/([^])\1+/g) || [])
        .length;

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
