// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// function positiveSum(arr) {
//   return arr
//           .filter(el => el > 0)
//           .reduce((acc, curr) => acc + curr, 0);
// }


// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0), 0);
// }


const positiveSum = arr => {
    return arr
            .filter(el => el > 0)
            .reduce((acc, curr) => acc + curr, 0);
};

console.log(positiveSum([1, -4, 7, 12]));