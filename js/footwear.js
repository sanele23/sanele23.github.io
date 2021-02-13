function shoes() {
    // Input - Select the weather
    let weat = document.querySelector('#weather').value;

    let shoes1 = "sandals";
    let shoes2 = "galoshes";
    let shoes3 = "boots";
    
    // Process - the objective is to combine the2 inputs into this format - city, country
    if (shoes1 === "hot") {
        document.getElementById('weather').value = "scandals";

    }
    if (shoes2 === "rain") {
        document.getElementById('weather').value = "galoshes";

    }
    if (shoes3 === "snow") {
        document.getElementById('weather').value =  "boots";

    }
    // Output - city, country
    document.getElementById('output').innerHTML = "Wear: " + weather;
    }