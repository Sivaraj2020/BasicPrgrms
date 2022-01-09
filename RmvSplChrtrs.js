function removeSpecialCharacter(s)
   {
       for (let i = 0; i < s.length; i++)
        {
  
            if (s[i] < 'A' || s[i] > 'Z' &&
                    s[i] < 'a' || s[i] > 'z') 
            { 
               
                s = s.substring(0, i) + s.substring(i + 1);
                i--;
            }
        }
        document.write(s);
   }
   
 
   let s = "Si@v***A#Ra((j"; 
   removeSpecialCharacter(s);