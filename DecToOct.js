function octalToDecimal(n)
{
    let num = n;
    let dec_value = 0;
 
    // Initializing base value to 1, i.e 8^0
    let base = 1;
 
    let temp = num;
    while (temp) {
 
        // Extracting last digit
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        // Multiplying last digit with appropriate
        // base value and adding it to dec_value
        dec_value += last_digit * base;
 
        base = base * 8;
    }
 
    return dec_value;
}
 
// Driver program to test above function
 
    const lowerNumber = parseInt(prompt('Enter the number: '));
 
    document.write(octalToDecimal(num) + "<br>");