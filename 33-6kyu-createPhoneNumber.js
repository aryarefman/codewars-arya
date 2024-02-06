// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// const createPhoneNumber = numbers => {
//     const first = numbers.slice(0, 3).join('');
//     const second = numbers.slice(3, 6).join('');
//     const third = numbers.slice(6, 11).join('');
//     return `(${first}) ${second}-${third}`;
// }


// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(let i = 0; i < numbers.length; i++) {
//       format = format.replace('x', numbers[i]);
//     }
//     return format;
// }


function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))