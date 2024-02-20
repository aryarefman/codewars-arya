// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// const isValidWalk = walk => {
//     let dx = 0;
//     let dy = 0;

//     for (let i = 0; i < walk.length; i++) {
//         if(walk[i] === 'n') dy++;
//         if(walk[i] === 's') dy--;
//         if(walk[i] === 'e') dy++;
//         if(walk[i] === 'w') dy--;
//     }

//     return walk.length === 10 && dx === 0 && dy === 0;
// }

const isValidWalk = (walk) =>
    walk.length === 10
    &&
    walk.filter((e) => e === "n").length === walk.filter((e) => e === "s").length 
    &&
    walk.filter((e) => e === "w").length === walk.filter((e) => e === "e").length;

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));