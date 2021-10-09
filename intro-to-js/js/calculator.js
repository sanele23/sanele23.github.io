
    function calc() {
        let numb1 = parseFloat(document.getElementById("numb1").value);
        let numb2 = parseFloat(document.getElementById("numb2").value);
        let result = parseFloat(document.getElementById("result").value);
        let operator = document.getElementById("operator").value;
        let predict;

        switch (operator) {
            case "+":
                predict = numb1 + numb2;
                break;

            case "-":
                predict = numb1 - numb2;
                break;

            case "/":
                predict = numb1 / numb2;
                break;
            case "X":
                predict = numb1 * numb2;
                break;
        }
    // Output - Check response

    if (result === predict) {
        document.getElementById("output").innerText = "Correct! 🏆";
    }
    else {
        document.getElementById("output").innerText = "Incorrect! 😢";
    }

}