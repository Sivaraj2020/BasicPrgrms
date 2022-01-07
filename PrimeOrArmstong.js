function armstrong(number)
{
sum=0;
let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
}
function Prime(number)
{
    let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}
}
const num = prompt('Enter a number: ');
armstrong(num);
Prime(num);