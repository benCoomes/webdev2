function every(array, f){
	for(var i = 0; i < array.length; i++){
		if(!f(array[i])){
			return false;
		}
	}
	return true;
}

function some(array, f){
	for(var i = 0; i < array.length; i++){
		if(f(array[i])){
			return true;
		}
	}
	return false;
}

var myArray = [1, 2, 3, 4, 5];
var secondArray = [0, 2, 4, 6];


function leqFive(number){
	return number <= 5;
}
console.log(every(myArray, leqFive));
console.log(every(secondArray, leqFive));
console.log(some(secondArray, leqFive));