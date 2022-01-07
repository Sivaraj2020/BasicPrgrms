function isVowel(x){

    boolean result;

        if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" )
         {
            result = true;
        }
        else{
            result = false;
        }
    return result;
    }

    var input;


    input = prompt("Enter a character ");
    input = input.toUpperCase();
    if(input.length == 1){
        isVowel(input);
        }
    }
    else{
        while(input.length != 1){
            prompt("Enter a character ");
            if(input.length == 1){
                isVowel(input);
            }
        }
    }

    alert(isVowel(input));