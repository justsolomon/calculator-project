const display = document.querySelector(".calculator_display");
const numbers = document.querySelectorAll('.number');
const numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

for(let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function() {
		display.textContent += `${numberArray[i]}`
	})
}

let decimal = document.querySelector(".decimal")
let add = document.querySelector(".add")
let subtract = document.querySelector(".sub")
let multiply = document.querySelector(".times")
let divide = document.querySelector(".div")
let clear = document.querySelector(".clearall")
let answer = document.querySelector(".key-equal")

decimal.addEventListener("click", function () {display.textContent += '.'})

add.addEventListener("click", function () {display.textContent += '+'})

subtract.addEventListener("click", function () {display.textContent += '-'})

multiply.addEventListener("click", function () {display.textContent += '*'})

divide.addEventListener("click", function () {display.textContent += '/'})

clear.addEventListener("click", function () {display.textContent = ''})

answer.addEventListener("click", function () {display.textContent = eval(display.textContent)})