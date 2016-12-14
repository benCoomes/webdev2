function deepEqual(item1, item2){
	if(typeof item1 == "object" && typeof item2 == "object" && item1 != null && item2 != null){
		var propsEqual = true;
		for(var key in item1){
			if(item1.hasOwnProperty(key)){
				if(item2.hasOwnProperty(key)){
					if(!deepEqual(item1[key], item2[key])){
						propsEqual = false;
						break;
					}
				}
				else{
					//item 1 has property that item 2 doesnt
					return false;
				}
			}
		}
		return propsEqual;
	}
	else if (item1 === item2){
		return true;
	}
	else{
		return false;
	}
}

var obj1 = {
	myNumber:1,
	myString:"hello",
	myBool: true
}

var obj2 = {
	myNumber:1,
	myString:"hello",
	myBool:true
}

var obj3 = {
	myString:"goodbye",
	myObj:obj1
}

var obj4 = {
	myString:"goodbye",
	myObj:obj2
}

var obj5 = {
	myString:"don't leave!",
	myObj:obj3,
	myArray:[1, 2, 3, 4, 5]
}

var obj6 = {
	myString:"don't leave!",
	myObj:obj4,
	myArray:[1, 2, 3, 4, 5]
}

/*all should be true, note use of ! to make expected false statements true*/
console.log(deepEqual(1, 1));
console.log(deepEqual("yes", "yes"));
console.log(!deepEqual(1, "1"));
console.log(deepEqual(obj1, obj2));
console.log(!deepEqual(obj1, obj3));
console.log(deepEqual(obj3, obj4));
console.log(!deepEqual(obj1, null));
console.log(deepEqual(obj5, obj6));

