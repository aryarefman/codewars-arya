// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

const digitalRoot = n => {
    if (String(n).length === 1) {
        return n;
    }
    
    // menggunakan callback
    // +curr = tanda plus(+) berfungsi mengubah 'string' menjadi 'number'
    return digitalRoot(n.toString().split('').reduce((prev, curr) => prev + +curr, 0));
}

console.log(digitalRoot(1190));