
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

	var valid = true;

	for(var i=0; i<str.length; i++){
		if(alphabet.indexOf(str.charAt(i)) < 0){
			valid = false;
			break;
		}
	}

	if(valid) console.log("TRUE");
	else console.log("FALSE");
}

function getSkew(str, n){

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!");
	else if(n > str.length || n <= 0) console.log("Invalid integer input!");
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++;
			else if (str.charAt(i-1) == 'C') C++;
		}
		skew = G - C;
		console.log("SKEW: " + skew);
	}
}

function getMaxSkewN(str, n){

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!");
	else if(n > str.length || n <= 0) console.log("Invalid integer input!");
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++;
			else if (str.charAt(i-1) == 'C') C++;

			if((G - C) > skew) skew = G - C;
		}
		console.log("SKEW: " + skew);
	}
}

function getMinSkewN(str, n){

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!");
	else if(n > str.length || n <= 0) console.log("Invalid integer input!");
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++;
			else if (str.charAt(i-1) == 'C') C++;
			
			if(i == 1) skew = G - C;
			else if((G - C) < skew) skew = G - C;
		}
		console.log("SKEW: " +  skew);
	}
}
