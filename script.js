function addNumbers(a, b) {
    return a + b;
}

function addUserNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = addNumbers(num1, num2);
        alert("The sum is: " + sum);
    } else {
        alert("Invalid input. Please enter numeric values.");
    }
}
