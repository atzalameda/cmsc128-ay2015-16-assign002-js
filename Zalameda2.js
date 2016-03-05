
function getHammingDistance(str1, str2){

	var count = 0;

	if(str1.length != str2.length) console.log("Error! Strings are not equal");
	else if(str1.length <= 0 || str2.length <= 0) console.log("Incomplete input strings");
	else {
		console.log("EQUAL");
		for(var i=0; i<str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i))
				count++;
		}
		console.log("COUNT: " + count);
	} 	
}