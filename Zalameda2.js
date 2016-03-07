
function getHammingDistance(str1, str2){ // function that counts the number of characters that differ in ith position from position 1 to strlen

	var count = 0;

	if(str1.length != str2.length) console.log("Error! Strings are not equal"); // checks if both strings are not equal
	else if(str1.length <= 0 || str2.length <= 0) console.log("Invalid string input!"); // checks if input strings are valid
	else {
		for(var i=0; i<str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i)) // if the character differs then counter will be incremented
				count++;
		}
		console.log("COUNT: " + count); // prints the counter
	} 	
}

function countSubstrPattern(origStr, pattern){ // function that counts the number of occurrence of pattern in the original string

	var count = 0;

	if(origStr.length <=0 || pattern.length <=0) console.log("Invalid string input!"); // checks if input strings are valid
	else{	
		for(var i=0; i<origStr.length; i++){
			var str = origStr.slice(i, i+pattern.length); // slices the original string with the same length of the pattern string
			if(str == pattern) count++; // if both strings are equal then counter will be incremented
		}
		console.log("COUNT: " + count); // prints the counter
	}
}

function isValidString(str, alphabet){ // function that returns true if the string str is a valid string based on the letters of alphabet

	var valid = true;

	if(str.length <=0 || alphabet.length <=0) console.log("Invalid string input!"); // checks if input strings are valid
	else{
		for(var i=0; i<str.length; i++){
			if(alphabet.indexOf(str.charAt(i)) < 0){ // checks if the character is found in the given alphabet
				valid = false; // converts valid to false
				break;
			}
		}
	}
	
	if(valid) console.log("TRUE"); // prints TRUE if valid
	else console.log("FALSE"); // if its not valid then it prints FALSE
}

function getSkew(str, n){ // function that returns the number of Gs minus the number of Cs in the first n nucleotides

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!"); // checks if input strings are valid
	else if(n > str.length || n <= 0) console.log("Invalid integer input!"); // checks if input n is valid
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++; // increments G
			else if (str.charAt(i-1) == 'C') C++; // increments C
		}
		skew = G - C; // computes skew by getting the difference of G and C
		console.log("SKEW: " + skew); // prints skew
	}
}

function getMaxSkewN(str, n){ // function that returns the maximum number of Gs minus the number of Cs in the first n nucleotides

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!"); // checks if input strings are valid
	else if(n > str.length || n <= 0) console.log("Invalid integer input!"); // checks if input n is valid
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++;
			else if (str.charAt(i-1) == 'C') C++;

			if((G - C) > skew) skew = G - C; // if the difference of G and C is greater than skew then the value of skew will be replaced
		}
		console.log("SKEW: " + skew); // prints skew
	}
}

function getMinSkewN(str, n){ // function that returns the minimum number of Gs minus the number of Cs in the first n nucleotides

	var G = 0, C = 0, skew = 0;

	if(str.length <= 0) console.log("Invalid string input!"); // checks if input strings are valid
	else if(n > str.length || n <= 0) console.log("Invalid integer input!"); // checks if input n is valid
	else{
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == 'G') G++;
			else if (str.charAt(i-1) == 'C') C++;
			
			if(i == 1) skew = G - C; // if its the first computation, then skew will be equal to G-C
			else if((G - C) < skew) skew = G - C; // if the difference of G and C is less than skew then the value of skew will be replaced
		}
		console.log("SKEW: " +  skew); // prints skew
	}
}
