let expressionDisplay = document.getElementById("expression");
let resultText = document.getElementById("resultText");
let cursor = document.querySelector(".cursor");
let buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorSelected = false;

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = this.innerText;

        // NUMBER OR DECIMAL
        if (!isNaN(value) || value === ".") {

            cursor.style.display = "inline-block";

            if (!isOperatorSelected) {
                firstNumber += value;
                resultText.innerText = firstNumber;
            } else {
                secondNumber += value;
                resultText.innerText = secondNumber;
            }
        }

        // OPERATOR
        else if (value === "+" || value === "-" || value === "*" || value === "/" || value === "%") {

            if (firstNumber !== "") {
                operator = value;
                isOperatorSelected = true;

                expressionDisplay.innerText = firstNumber + " " + operator;
            }
        }

        // EQUAL
        else if (value === "=") {

            if (firstNumber !== "" && secondNumber !== "") {

                let num1 = parseFloat(firstNumber);
                let num2 = parseFloat(secondNumber);
                let result;

                if (operator === "+") result = num1 + num2;
                else if (operator === "-") result = num1 - num2;
                else if (operator === "*") result = num1 * num2;
                else if (operator === "/") result = num1 / num2;
                else if (operator === "%") result = num1 % num2;

                expressionDisplay.innerText = firstNumber + " " + operator + " " + secondNumber;
                resultText.innerText = result;

                // Hide cursor after showing result
                cursor.style.display = "none";

                // Reset for next calculation
                firstNumber = result.toString();
                secondNumber = "";
                operator = "";
                isOperatorSelected = false;
            }
        }

        // CLEAR
        else if (value === "C") {

            firstNumber = "";
            secondNumber = "";
            operator = "";
            isOperatorSelected = false;

            expressionDisplay.innerText = "";
            resultText.innerText = "";

            // Show cursor again
            cursor.style.display = "inline-block";
        }

        // DELETE
        else if (value === "DEL") {

            cursor.style.display = "inline-block";

            if (!isOperatorSelected) {
                firstNumber = firstNumber.slice(0, -1);
                resultText.innerText = firstNumber;
            } else {
                secondNumber = secondNumber.slice(0, -1);
                resultText.innerText = secondNumber;
            }
        }

    });

});