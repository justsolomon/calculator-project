const display = document.querySelector(".workings-display");
const answerDisplay = document.querySelector('.answer-display');
const numbers = document.querySelectorAll('.number');
const keyOperators = document.querySelectorAll('.key-operator');
const numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operatorArray = ['+', '-', '*', '/'];

for(let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function() {
		if (!answerDisplay.textContent.startsWith('Ans') && answerDisplay.textContent !== '') {
			answerDisplay.textContent = `Ans = ${display.textContent}`;
			display.textContent = '';
		}
		display.textContent += `${numberArray[i]}`;
	})
}

for(let i = 0; i < keyOperators.length; i++) {
	keyOperators[i].addEventListener('click', function() {
		display.textContent += ` ${operatorArray[i]} `;
	})
}

window.addEventListener('keydown', function(e) {
	if (numberArray.includes(Number(e.key))) display.textContent += e.key;
	else if (operatorArray.includes(e.key)) display.textContent += ` ${e.key} `;
	else if (e.key === 'Enter') calculateAnswer();
	else if (e.key === 'Backspace') {
		display.textContent = display.textContent.slice(0, -1)
	}
})

let decimal = document.querySelector(".decimal")
let clear = document.querySelector(".clearall")
let answer = document.querySelector(".key-equal")
const deleteEntry = document.querySelector('.clear-entry')

decimal.addEventListener("click", function () {display.textContent += '.'})

clear.addEventListener("click", function () {display.textContent = ''})

deleteEntry.addEventListener('click', function () {display.textContent = display.textContent.slice(0, -1)})

answer.addEventListener("click", calculateAnswer)

function calculateAnswer() {
	if (display.textContent === '') return;
	else {
		answerDisplay.textContent = display.textContent + ' =';
		display.textContent = eval(display.textContent);
	}
}