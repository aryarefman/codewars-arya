// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// function isIsogram(str) {
//     str = str.toLowerCase();
//     if (str === '') {
//         return true;
//     }
//     let chars = str.split('');
//     for (let i = 0; i < chars.length; i++) {
//         let index = chars.indexOf(chars[i]);
//         if (index !== i) {
//             return false;
//         }
//     }
//     return true;
// }


function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('aba'));