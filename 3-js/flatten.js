/* demonstrates the use of higher order functions 
	in the reduce method
*/

function flatten(array){
	var flatArray =  array.reduce(function(combined, remaining){
		return combined.concat(remaining);
	});
	return flatArray;
}

var myArray = [
	[1, 2, 3],
	["a", "b", "c"],
	[4, 5, 6],
	["d", "e", "f"]
];

console.log(flatten(myArray));