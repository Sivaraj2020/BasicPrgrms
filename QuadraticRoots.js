let root1, root2;
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
let rootcheck = b * b - 4 * a * c;
if (rootcheck > 0) {
    root1 = (-b + Math.sqrt(rootcheck)) / (2 * a);
    root2 = (-b - Math.sqrt(rootcheck)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if (rootcheck == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else {
    console.log('Imaginary Roots');
}