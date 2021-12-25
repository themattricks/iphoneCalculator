var numberValue = document.querySelectorAll(".container .row .primaryButton");
for (var i = 0; i < numberValue.length; i++) {
    numberValue[i].addEventListener('click', function() {
        // console.log("You clicked:", this.innerHTML);
        if (typeof(basicOperation) !== 'string') {
            if (typeof(firstNumber) == "number") {
                firstNumber = parseInt(firstNumber.toString() + this.innerHTML.toString());
            } else {
                firstNumber = parseInt(this.innerHTML);
            }
            document.getElementById('result').innerHTML = firstNumber;
        } else {
            if (typeof(secondNumber) == "number") {
                secondNumber = parseInt(secondNumber.toString() + this.innerHTML.toString());
            } else {
                secondNumber = parseInt(this.innerHTML);
            }
            document.getElementById('result').innerHTML = secondNumber;
        }
    });
}

var operation = document.querySelectorAll(".container .row .yellowButton");
var operations = [];
for (var i = 0; i < operation.length; i++) {
    operation[i].addEventListener('click', function() {
        basicOperation = this.innerHTML;
        operations.push(basicOperation);
        if (basicOperation == "=") {
            var operationResult = eval((firstNumber) + operations[operations.length - 2] + (secondNumber));
            document.getElementById('result').innerHTML = operationResult;
        }
        //document.getElementById('result').innerHTML = parseInt(this.innerHTML);
    });
}

var operationValue = document.querySelectorAll(".container .row .secondaryOperationButton");
for (var i = 0; i < operationValue.length; i++) {
    operationValue[i].addEventListener('click', function() {
        currentOperation = this.innerHTML;
        // console.log(currentOperation);
        if (currentOperation == "AC") {
            document.getElementById('result').innerHTML = "0";
            delete firstNumber;
            delete secondNumber;
            delete basicOperation;
            var operations = [];
        } else if (currentOperation == "±") {
            if (typeof(basicOperation) !== 'string') {
                firstNumber = parseInt(document.getElementById('result').innerHTML) * -1;
            } else {
                secondNumber = parseInt(document.getElementById('result').innerHTML) * -1;
            }
            document.getElementById('result').innerHTML = parseInt(document.getElementById('result').innerHTML) * -1;
        } else if (currentOperation == "%") {
            if (typeof(basicOperation) !== 'string') {
                firstNumber = parseInt(document.getElementById('result').innerHTML) / 100;
            } else {
                secondNumber = parseInt(document.getElementById('result').innerHTML) / 100;
            }
            document.getElementById('result').innerHTML = parseInt(document.getElementById('result').innerHTML) / 100;
        }
    });
}