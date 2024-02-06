// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

const solution = number => {
    if (number <= 0) {
        return 0;
    }
    let filterKelipatan3Dan5 = [...Array(number - 1)].map((e, i) => i + 1).filter(e => e % 3 === 0 || e % 5 === 0);
    let objectToArray = [...new Set(filterKelipatan3Dan5)];
    return objectToArray.reduce((prev, curr) => prev + curr, 0);
}

console.log(solution(10));