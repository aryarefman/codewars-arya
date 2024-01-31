// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// const getSum = (a, b) => {
//     if (a === b) {
//         return a;
//     }

//     if (a > b) {
//         [a, b] = [b, a];
//     }

//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }


const getSum = (a, b) => {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(2,2));
console.log(getSum(-1,2));