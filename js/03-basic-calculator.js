// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if (y === 0) {
                return "Cannot divide by zero!";
            }
            return x / y;
        default:
            return "Invalid operation";
    }
}

do {
    // COLLECT FIRST NUMBER FROM USER
    let number1 = parseFloat(prompt("Enter the first number:"));

    // COLLECT SECOND NUMBER FROM USER
    let number2 = parseFloat(prompt("Enter the second number:"));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = prompt("Choose an operation (add, subtract, multiply, or divide):");

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let result = calculate(number1, number2, operation);
    alert("Result: " + result);

    // Check if the operation was invalid.
    if (result === "Invalid operation") {
        alert("Invalid operation. Please try again.");
    }
   
    // Prompt to rerun the application.
} while (confirm("Do you want to perform another calculation?"));
