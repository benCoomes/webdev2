/* the apply method is called on a function. 
   the first parameter is the context that 'this' will be set equal to within the function
   the first parameter is used to simulate method calls: object.function()
   	is equivilant to function.apply(object, null);
   the second parameter is an collection of arguments that can be accessed through the 
   arguments object. 
   A use for apply is demonstrated below:
*/

function debugMode(fname, f){
	return function(){
		console.log("Calling " + fname + " with argument " + arguments.toString());
		var result = f.apply(null, arguments);
		console.log("Returned from " +  fname + " with result " + result.toString());
	}
}

var debugAbs = debugMode("Math.abs", Math.abs);
var debugMax = debugMode("Math.max", Math.max);

debugAbs(-2);
debugMax(2, 3);
debugMax(3, 5, 7, 9, -1, 0);

