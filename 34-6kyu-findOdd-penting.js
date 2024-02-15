// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

// XOR => operasi spesial yang mengoperasikan 2 parameter (a ^ b === a XOR b)
// [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]
// 20 ^ 20 => 0
// 1 ^ 1 => 0
// 2 ^ 2 => 0
// 3 ^ 3 => 0
// 4 ^ 4 => 0
// 5 ^ 5 => 0
// 20 ^ 20 => 0
// yang tersisa hanya angka 5, sehingga hasilnya 5
const findOdd = arr => arr.reduce((prev, curr) => prev ^ curr, 0);

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));