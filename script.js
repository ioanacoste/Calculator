let equalPressed = 0;

//accesing all buttons
let buttonNumber = document.querySelectorAll(".button-numb");
let buttonOperation = document.querySelectorAll(".button-op");

let input = document.getElementById("input");
let clear = document.getElementById("clear");
let deleteB = document.getElementById("delete");
let equal = document.getElementById("equal");

window.onload = function () {
  input.value = "";
};

buttonNumber.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equalPressed == 1) {
      input.value = "";
      equalPressed = 0;
    }
    input.value += button_class.value;
  });
});

buttonOperation.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equalPressed == 1) {
      input.value = "";
      equalPressed = 0;
    }
    if (button_class.value == "-" || button_class.value == "+") {
      input.value += button_class.value;
    } else {
      if (input.value != "") {
        input.value += button_class.value;
      } else {
        alert("Operation invalid!");
      }
    }
  });
});

equal.addEventListener("click", () => {
  equalPressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
    equalPressed = 0;
  } catch (err) {
    alert("Invalid Input");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

deleteB.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
