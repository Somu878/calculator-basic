const output = document.querySelector('.output');
let currentInput = '';
let operator = '';
let firstInput = '';
let secondInput = '';

document.querySelectorAll('.n').forEach(button => {
    button.addEventListener('click', () => {
       const btext = button.innerText;
       output.textContent +=btext;
    });
});

document.querySelectorAll('.op').forEach(button => {
    button.addEventListener('click', () => {
        const btext = button.innerText;
       output.textContent +=btext;
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    calculate();
});

document.querySelector('.reset').addEventListener('click', () => {
    output.innerText = "";
});

function calculate() {
    let res = output.innerText.replace(/x/g, "*").replace(/÷/g, "/");;
    let result = eval(res);
    // Check if the result is a floating-point number
    if (Number.isFinite(result) && result % 1 !== 0) {
      result = result.toFixed(3);
    }
    output.innerText = result;
    resDisplayed = true;
}

function updateDisplay() {
   
}
