// Part One
function partOne() {
    let inputOne = parseFloat(document.querySelector('#inputOne').value);

    let outputNumber = document.getElementById("outputOne");

    // Output 
    outputNumber.innerHTML = 'Number entered: ' + inputOne;
}

// Part Two
function partTwo() {
    let inputTwo = parseFloat(document.querySelector('#inputTwo').value);
    let outputSum = document.getElementById('outputTwo');

    const inputSum = parseInt(inputTwo);

    if (inputSum !== NaN) {
        outputSum.innerHTML = 'Total Sum: ' + sum(inputSum);
    }
}
// function with parameter "sum"
function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}