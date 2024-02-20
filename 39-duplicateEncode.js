// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// sebuah karakter duplikat ketika index pertamanya sama dengan index terakhirnya
// word.indexOf(e) === word.lastIndexOf(e)
// syntax di atas mengembalikan karakter duplikat sesuai dengan angka duplikatnya

// array.indexOf(e) !== i && array.lastIndexOf(e) === i
// syntax di atas digunakan jika kita ingin mencari karakter duplikat dan kita ingin-
// mengembalikan karakternya hanya sekali

// const duplicateEncode = (word) =>
//   word
//     .toLowerCase()
//     .split("")
//     .map((e, i, array) => array.indexOf(e) === array.lastIndexOf(e) ? (e = "(") : (e = ")"))
//     .join("");

const duplicateEncode = (word) =>
  word.replace(/./gi, (e) => word.indexOf(e) === word.lastIndexOf(e) ? "(" : ")");

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
