function printTogether(prefix, suffix){
	console.log(prefix + suffix);
}

var hiThen = printTogether.bind(null, "hi");
hiThen("goodbye");