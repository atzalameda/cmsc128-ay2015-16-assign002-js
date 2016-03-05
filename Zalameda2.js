
function getHammingDistance(str1, str2){

	var count = 0;

	if(str1.length != str2.length) console.log("Error! Strings are not equal");
	else if(str1.length <= 0 || str2.length <= 0) console.log("Invalid string input!");
	else {
		for(var i=0; i<str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i))
				count++;
		}
		console.log("COUNT: " + count);
	} 	
}

function countSubstrPattern(origStr, pattern){

	var count = 0;

	if(origStr.length <=0 || pattern.length <=0) console.log("Invalid string input!");
	else{	
		for(var i=0; i<origStr.length; i++){
			var str = origStr.slice(i, i+pattern.length);
			if(str == pattern) count++;
		}
		console.log("COUNT: " + count);
	}
}

function isValidString(str, alphabet){

	var valid;

	for(var i=0; i<str.length; i++){
		for(var j=0; j<alphabet.length; j++){
			if(str.charAt(i) == alphabet.charAt(j)){
				valid = true; // WRONG IMPLEMENTATION! FIX THIS!!
				break;
			} else valid = false;
		}
	}

	if(valid) console.log("TRUE");
	else console.log("FALSE");
}

function getSkew(str, n){

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!");
	else if(n > str.length) console.log("Invalid integer input!");
	else{
		for(var i=0; i<n; i++){
			if(str.charAt(i) == 'G') G++;
			else if (str.charAt(i) == 'C') C++;
		}
		skew = G - C;
		console.log("SKEW: " + skew);
	}
}
