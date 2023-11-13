document.addEventListener('DOMContentLoaded', function () {
    // makes variable answerfield the id 'answer'
    let answerField = document.getElementById('answer');
    // displays the input by making it a string
    let currentInput = '';
// updates the display
    function updateAnswerField() {
        answerField.value = currentInput;
    }
//clears the display
    function clearInput() {
        currentInput = '';
        updateAnswerField();
    }
// ensures that numbers are ansers in the form of strings if not error is displayed
    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
            updateAnswerField();
        } catch (error) {
            currentInput = 'Error';
            updateAnswerField();
        }
    }
// fetches element with id 'clear' and when clicked clears display
    document.getElementById('clear').addEventListener('click', clearInput);
// fetches element with id 'eqaul' and when clicked calculates the answer
    document.getElementById('equal').addEventListener('click', calculate);

    // makes variable numberButtons the class 'num-btn'
    let numberButtons = document.querySelectorAll('.num-btn');
    numberButtons.forEach(function (button) {
        // adds previuos varible to eqation when clicked 
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-value');
            updateAnswerField();
        });
    });
// makes a variable for all 'op-btn' class
    let operatorButtons = document.querySelectorAll('.op-btn');
    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-operator');
            updateAnswerField();
        });
    });
});