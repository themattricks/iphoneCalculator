var numberValue = document.querySelectorAll(".container .row .primaryButton");
var GonnaBeDecimal = 0;
for (var i = 0; i < numberValue.length; i++) {
    numberValue[i].addEventListener('click', function() {
        // console.log("You clicked:", this.innerHTML);
        // If You Didn't Get The Operation Yet
        // Means That You Gonna Take The First Number
        if (typeof(basicOperation) !== 'string') {
            // If There's A Number Already Add The Clicked Number To It
            if (typeof(firstNumber) == "number") {
                if (this.innerHTML.toString() == '.') {
                    firstNumber = parseFloat(firstNumber.toString() + this.innerHTML.toString());
                    GonnaBeDecimal = 1;
                } else {
                    if (GonnaBeDecimal == 1) {
                        firstNumber = parseFloat(firstNumber.toString() + '.' + this.innerHTML.toString());
                    } else {
                        GonnaBeDecimal = 0;
                        firstNumber = parseInt(firstNumber.toString() + this.innerHTML.toString());
                    }
                }
            // If There's Not Just Get The Clicked Number
            } else {
                firstNumber = parseInt(this.innerHTML);
            }
            // Show The Number In The Result Area
            document.getElementById('result').innerHTML = firstNumber;
        // If There Is Already An Operation
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
            operationResult = parseFloat(operationResult).toString();
            if (operationResult.length > 5) {
                operationResult = parseFloat(operationResult).toFixed(4);
            }
            document.getElementById('result').innerHTML = parseFloat(operationResult);
            firstNumber = operationResult;
            delete secondNumber;
            delete basicOperation;
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
