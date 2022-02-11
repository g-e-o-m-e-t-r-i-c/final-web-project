// allows submit button to respond when clicked
document.getElementById('submit').addEventListener('click', calculate)

function getValue(id) {
	return document.getElementById(id).value
}

function convertType(operandType, operand) {
	switch (operandType) {
		case 'string':
			operand = String(operand)
			break
		case 'number':
			operand = Number(operand)
			break
	}
}

function calculate() {
	let selectedOperator // operator selected by user
	let result // output of the operation

	// obtain the operands
	let operand1 = getValue('operand1')
	let operand2 = getValue('operand2')

	// obtain the operand types (string/number)
	let operandType1 = getValue('operand1-type')
	let operandType2 = getValue('operand2-type')

	// obtain the operator
	let radios = document.getElementsByName('operator')

	// convert the operands to the datatype specified
	convertType(operandType1, operand1)
	convertType(operandType2, operand2)

	// loop through each possible operand value and find the selected one
	for (let i = 0; i < radios.length; i++) {
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
	getValue('final-operation').innerHTML =
		operand1 + ' ' + selectedOperator + ' ' + operand2

	getValue('result').innerHTML = result
}
