//calcTotal Keeps track of previous numbers
let calcTotal = 0;
let userInput = "0";
//Keeps track of previous operators
let workingOperator ;
let screen = document.querySelector(".screen");


function rerender() {
	if(userInput.length > 8){
		userInput.slice(0,8)
	}else {
		screen.innerText = userInput;
	}
}

// 1. Whenever anything is clicked on, the init() function will run.

function init() {
	document.querySelector(".calc-buttons").addEventListener("click", function (event) {
		buttonClick(event.target.innerText);
	});
}

init();


//Step 2 buttonClick() checks if its not a number. This is where the click event is checked and sent to its corresponding function

//value represents what is on the button that is clicked
function buttonClick(value) {
	if (isNaN(parseInt(value)) ) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	rerender();
}
//Step 3 if userInput is empty, assign 0. If it it has a value add to the end "+= value"
function handleNumber(value) {
	if (userInput === "0") {
		userInput = value;
	} else{
		userInput += value;
	}

}


//Step 4 If it is a symbol and AC we clear everything. If it is an "=" we have total everything. It it is "arrow" we delete the last input. If none of this applies, use the operators
function handleSymbol(value) {
	switch (value) {
		case "AC":
			userInput = "0";
			calcTotal = 0;
			break;

		case "=":
			if (workingOperator  === null) {
				return;
			}
			flushOperation(parseInt(userInput));
			if (userInput >= 9) {
				userInput = "Error"
			}else{
				workingOperator  = null;
				userInput = +calcTotal;
				calcTotal = 0;
			}
			break;

		case "←":
			if (userInput.length === 1) {
				userInput = "0";
			} else {
				userInput = userInput.substring(0, userInput.length - 1);
			}
			break;

		case "+":
		case "-":
		case "×":
		case "÷":
			handleMath(value);
			break;
	}
}
/*
	Step 5, if the userInput is equal to zero return, if not
	send it flushOperation() function
 */
function handleMath(value) {
	if (userInput === "0") {
		return;
	}

	const intuserInput = parseInt(userInput);

	if (calcTotal === 0) {
		calcTotal = intuserInput;
	} else {
		flushOperation(intuserInput);
	}


	workingOperator  = value
	userInput = "0";

}
/*
	Step 6 Depending on the button/symbol they clicked, it will do the corresponding math.
*/
function flushOperation(intuserInput) {
	if (workingOperator  === "+" && calcTotal >= 8) {
		calcTotal += intuserInput;
	} else if (workingOperator  === "-") {
		calcTotal -= intuserInput;
	} else if (workingOperator  === "×") {
		calcTotal *= intuserInput;
	} else {
		calcTotal /= intuserInput;
	}
}


