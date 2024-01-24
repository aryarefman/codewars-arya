// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// const getCount = str => {
//     const chars = str.split('');
//     const vowels = ['a', 'i', 'u', 'e', 'o'];
//     const count = chars.filter(char => vowels.includes(char)).length;
//     return count;
// }


function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

console.log(getCount('abracadabra'));