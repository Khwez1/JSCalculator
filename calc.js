document.addEventListener('DOMContentLoaded', function () {
    const answerField = document.getElementById('answer');
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

    document.getElementById('clear').addEventListener('click', clearInput);

    document.getElementById('equal').addEventListener('click', calculate);

    const numberButtons = document.querySelectorAll('.num-btn');
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-value');
            updateAnswerField();
        });
    });

    const operatorButtons = document.querySelectorAll('.op-btn');
    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.getAttribute('data-operator');
            updateAnswerField();
        });
    });
});