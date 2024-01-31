// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

const filter_list = l => l.filter(e =>  typeof(e) === 'number');

console.log(filter_list([1,2,'aasf','1','123',123]));