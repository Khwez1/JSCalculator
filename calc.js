document.addEventListener('DOMContentLoaded', function () {
    let answerField = document.getElementById('answer');
    let currentInput = '';

    function updateAnswerField() {
        answerField.value = currentInput;
    }

    function clearInput() {
        currentInput = '';
        updateAnswerField();
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
            updateAnswerField();
        } catch (error) {
            currentInput = 'Error';
            updateAnswerField();
        }
    }
// fetches button with id 'clear' and when clicked clears display
    document.getElementById('clear').addEventListener('click', clearInput);
// fetches button with id 'eqaul' and when clicked calculates the answer
    document.getElementById('equal').addEventListener('click', calculate);

    let numberButtons = document.querySelectorAll('.num-btn');
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-value');
            updateAnswerField();
        });
    });

    let operatorButtons = document.querySelectorAll('.op-btn');
    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-operator');
            updateAnswerField();
        });
    });
});