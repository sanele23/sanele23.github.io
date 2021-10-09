function addNumbers() {
    // Input - Get the input of the pound measurement
    
    let measure = document.querySelector('#pound').value;
    measure = parseFloat(measure);
    // Process - the objective is to combine the2 inputs into this format - city, country
    let conversion = measure / 2.2
    // Output - city, country
    document.getElementById('output').innerHTML = "The measurement is: " + conversion.toFixed(1) + " kilograms";
    }