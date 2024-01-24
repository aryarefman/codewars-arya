// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// const highAndLow = numbers => {
//     const number = numbers.split(' ').map(e => Number(e));
//     const highest = Math.max(...number);
//     const lowest = Math.min(...number);
//     return `${highest} ${lowest}`;
// }


// const highAndLow = numbers => {
//     const number = numbers.split(' ').map(Number);
//     const highest = Math.max(...number);
//     const lowest = Math.min(...number);
//     return `${highest} ${lowest}`;
// }


// const highAndLow = numbers => {
//     const number = numbers.split(' ').map(Number);
//     return `${Math.max(...number)} ${Math.min(...number)}`;
// }


function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow('1 2 3 4 5 6 -9'));