function SD(Arr) {
   
    var total = 0;
    for (var key in Arr)
       total += Arr[key];
    var meanVal = total / Arr.length;
    
 
    var SDprep = 0;
    for (var key in Arr)
       SDprep += Math.pow((parseFloat(Arr[key]) - meanVal), 2);
    var SDresult = Math.sqrt(SDprep /Arr.length);
    
    alert(SDresult);
 
 }
 
 var Arr = [72, 54, 87, 33, 94,43,43];
 SD(numbersArr);