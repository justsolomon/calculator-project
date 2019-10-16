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

pressNum1 = () => {
    display.textContent = "1";
}

pressNum2 = () => {
    display.textContent = "2";
}

pressNum3 = () => {
    display.textContent = "3";
}

pressNum4 = () => {
    display.textContent = "4";
}

pressNum5 = () => {
    display.textContent = "5";
}

pressNum6 = () => {
    display.textContent = "6";
}

pressNum7 = () => {
    display.textContent = "7";
}

pressNum8 = () => {
    display.textContent = "8";
}

pressNum9 = () => {
    display.textContent = "9";
}

pressNum0 = () => {
    display.textContent = "0";
}

one.addEventListener("click", pressNum1)

two.addEventListener("click", pressNum2)

three.addEventListener("click", pressNum3)

four.addEventListener("click", pressNum4)

five.addEventListener("click", pressNum5)

six.addEventListener("click", pressNum6)

seven.addEventListener("click", pressNum7)

eight.addEventListener("click", pressNum8)

nine.addEventListener("click", pressNum9)

zero.addEventListener("click", pressNum0)
// const calculator = document.querySelector(".calculator")
// const keys = document.querySelector("section")

// const pressKey = () => {
//     if (!action) console.log("number key");
//     else if (
//         action === "add" || 
//         action === "subtract" ||
//         action === "multiply" ||
//         action === "divide") console.log("operator key!");
//         else if (action === "decimal") console.log("decimal key");
//         else if (action === "clear") console.log("clear key");
//         else if(action === "calculate") console.log("equal key")
//     }
    
//     const key = pressKey.target
//     const action = key.dataset.action
// keys.addEventListener("click", pressKey)