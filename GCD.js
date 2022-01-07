function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
  console.log(gcd_two_numbers(a, b));
