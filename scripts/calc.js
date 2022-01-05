// allows submit button to respond when clicked
document.getElementById('submit').addEventListener('click', calculateIt)

function calculateIt() {
	let selectedOperator // operator selected by user
	let result // output of the operation

	// obtain the operands
	let operand1 = document.getElementById('operand1').value
	let operand2 = document.getElementById('operand2').value

	// obtain the operand types (string/number)
	let operand1type = document.getElementById('operand1-type').value
	let operand2type = document.getElementById('operand2-type').value

	// obtain the operator
	let radios = document.getElementsByName('operator')

	// convert the operands to the datatype specified
	switch (operand1type) {
		case 'string':
			operand1 = String(operand1)
			break
		case 'number':
			operand1 = Number(operand1)
			break
	}

	switch (operand2type) {
		case 'string':
			operand2 = String(operand2)
			break
		case 'number':
			operand2 = Number(operand2)
			break
	}

	// loop through each possible operand value and find the selected one
	for (let i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			selectedOperator = radios[i].value

			// execute a different operation depending on which operator was selected
			switch (radios[i].value) {
				// arithmetic
				case '+':
					result = operand1 + operand2
					break
				case '-':
					result = operand1 - operand2
					break
				case '*':
					result = operand1 * operand2
					break
				case '/':
					result = operand1 / operand2
					break
				case '%':
					result = operand1 % operand2
					break

				// string
				case 'concat':
					result = operand1 + operand2
					selectedOperator = '+'
					break

				// logic
				case '==':
					result = operand1 == operand2
					break
				case '===':
					result = operand1 === operand2
					break
				case '!=':
					result = operand1 != operand2
					break
				case '!==':
					result = operand1 !== operand2
					break
				case '>':
					result = operand1 > operand2
					break
				case '>=':
					result = operand1 >= operand2
					break
				case '<':
					result = operand1 < operand2
					break
				case '<=':
					result = operand1 <= operand2
					break
			}

			break
		}
	}

	// add "" to string operands
	if (typeof operand1 === 'string') {
		operand1 = '"' + operand1 + '"'
	}
	if (typeof operand2 === 'string') {
		operand2 = '"' + operand2 + '"'
	}

	// display operation and return value
	document.getElementById('final-operation').innerHTML =
		operand1 + ' ' + selectedOperator + ' ' + operand2

	document.getElementById('result').innerHTML = result
}
