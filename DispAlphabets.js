function printAlphabets(option){
	
	var i = 65;
	var j = 91;
 
	if(option == 'small'){
		i = 97;
		j = 123; 
	}
 
	
	for(k = i; k < j; k++){

		var str =String.fromCharCode(k);
		
                console.log(str);
	}
 
}