// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// const findShort = s => {
//     const word = s.split(' ').map(e => e.length);
//     const smallest = Math.min(...word);
//     return smallest;
// }


const findShort = s => Math.min(...s.split(' ').map(e => e.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));