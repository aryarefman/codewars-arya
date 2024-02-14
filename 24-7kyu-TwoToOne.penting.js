// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// const longest = (s1, s2) => {
//     let object = new Set();

//     for (e of s1) {
//         object.add(e); 
//     }

//     for (e of s2) {
//         object.add(e);
//     }
    
//     let result = '';
//     for (e of object) {
//         result += e;
//     }

//     return result.split('').sort().join('');
// }


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

console.log(longest("aretheyhere", "yestheyarehere"));