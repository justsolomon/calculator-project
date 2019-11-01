let display = document.querySelector(".calculator_display");

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let decimal = document.querySelector(".decimal")
let add = document.querySelector(".add")
let subtract = document.querySelector(".sub")
let multiply = document.querySelector(".times")
let divide = document.querySelector(".div")
let clear = document.querySelector(".clearall")
let answer = document.querySelector(".key-equal")

one.addEventListener("click", function () {display.textContent += '1'})

two.addEventListener("click", function () {display.textContent += '2'})

three.addEventListener("click", function () {display.textContent += '3'})

four.addEventListener("click", function () {display.textContent += '4'})

five.addEventListener("click", function () {display.textContent += '5'})

six.addEventListener("click", function () {display.textContent += '6'})

seven.addEventListener("click", function () {display.textContent += '7'})

eight.addEventListener("click", function () {display.textContent += '8'})

nine.addEventListener("click", function () {display.textContent += '9'})

zero.addEventListener("click", function () {display.textContent += '0'})

decimal.addEventListener("click", function () {display.textContent += '.'})

add.addEventListener("click", function () {display.textContent += '+'})

subtract.addEventListener("click", function () {display.textContent += '-'})

multiply.addEventListener("click", function () {display.textContent += '*'})

divide.addEventListener("click", function () {display.textContent += '/'})

clear.addEventListener("click", function () {display.textContent = ''})

answer.addEventListener("click", function () {display.textContent = eval(display.textContent)})