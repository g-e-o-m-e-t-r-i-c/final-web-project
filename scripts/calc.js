// allows submit button to respond when clicked
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {
	// myOperator: operator selected by user
	// returnValue: output of the operation
	var myOperator;
	var returnValue;

	// get the operands
	var operand1 = document.getElementById("operand1").value;
	var operand2 = document.getElementById("operand2").value;

	// get the operand types (string/number)
	var select1 = document.getElementById("operand1-type");
	var select2 = document.getElementById("operand2-type");

	var operand1type = select1.value;
	var operand2type = select2.value;

	// fetch the operator
	var radios = document.getElementsByName("operator");

	// convert the operands to the type satisfied
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

	// loop through each possible operand value and find the checked one
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			myOperator = radios[i].value;

			// do a different operation depending on which operator was selected
			switch (radios[i].value) {
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
				case "concat":
					returnValue = operand1 + operand2;
					myOperator = "+";
					break;
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

	// display the operation
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
