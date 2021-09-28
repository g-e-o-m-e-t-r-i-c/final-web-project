// allows submit button to respond when clicked
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {
	var myOperator; // operator selected by user
	var returnValue; // output of the operation

	// obtain the operands
	var operand1 = document.getElementById("operand1").value;
	var operand2 = document.getElementById("operand2").value;

	// obtain the operand types (string/number)
	var operand1type = document.getElementById("operand1-type").value;
	var operand2type = document.getElementById("operand2-type").value;

	// obtain the operator
	var radios = document.getElementsByName("operator");

	// convert the operands to the datatype specified
	switch (operand1type) {
		case "string":
			operand1 = String(operand1);
			break;
		case "number":
			operand1 = Number(operand1);
			break;
	}

	switch (operand2type) {
		case "string":
			operand2 = String(operand2);
			break;
		case "number":
			operand2 = Number(operand2);
			break;
	}

	// loop through each possible operand value and find the selected one
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			myOperator = radios[i].value;

			// execute a different operation depending on which operator was selected
			switch (radios[i].value) {
				// -- Arithmetic --
				case "+":
					returnValue = operand1 + operand2;
					break;
				case "-":
					returnValue = operand1 - operand2;
					break;
				case "*":
					returnValue = operand1 * operand2;
					break;
				case "/":
					returnValue = operand1 / operand2;
					break;
				case "%":
					returnValue = operand1 % operand2;
					break;

				// -- String --
				case "concat":
					returnValue = operand1 + operand2;
					myOperator = "+";
					break;

				// -- Logic --
				case "==":
					returnValue = operand1 == operand2;
					break;
				case "===":
					returnValue = operand1 === operand2;
					break;
				case "!=":
					returnValue = operand1 != operand2;
					break;
				case "!==":
					returnValue = operand1 !== operand2;
					break;
				case ">":
					returnValue = operand1 > operand2;
					break;
				case ">=":
					returnValue = operand1 >= operand2;
					break;
				case "<":
					returnValue = operand1 < operand2;
					break;
				case "<=":
					returnValue = operand1 <= operand2;
					break;
			}

			break;
		}
	}

	// add "" to string operands
	if (typeof operand1 === "string") {
		operand1 = '"' + operand1 + '"';
	}
	if (typeof operand2 === "string") {
		operand2 = '"' + operand2 + '"';
	}

	// display operation and return value
	document.getElementById("final-operation").innerHTML =
		operand1 + " " + myOperator + " " + operand2;

	document.getElementById("result").innerHTML = returnValue;
}
