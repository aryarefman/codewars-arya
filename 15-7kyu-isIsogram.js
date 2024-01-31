// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('aba'));
console.log(isIsogram('absd'));
