// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// const openOrSenior = data => data.map(e => (e[0] >= 55 && e[1] > 7) ? 'Senior' : 'Open');


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));