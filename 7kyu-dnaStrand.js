// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// const dnaStrand = dna => {
//     const complements = {
//         'A' : 'T',
//         'T' : 'A',
//         'G' : 'C',
//         'C' : 'G'
//     }
//     return dna.split('').map(e => complements[e]).join('');
// }


// function DNAStrand(dna){
//     return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
// }


function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

console.log(DNAStrand("ATTGC"));