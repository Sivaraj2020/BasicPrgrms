let rev = 0;
let lastDigit;
const num = prompt('Enter a integer: ');
while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);