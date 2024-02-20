// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

const findOutlier = integers => {
    const odd = integers.filter(e => Math.abs(e) % 2 === 1);
    const even = integers.filter(e => Math.abs(e) % 2 === 0);

    return (odd.length === 1) ? Number(odd) : Number(even);
}

console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([1,1,0,1,1]));
console.log(findOutlier([0,0,3,0,0]));
console.log(findOutlier([1,2,3]));
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([0, -1, 0]))