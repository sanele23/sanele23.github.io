// get all the neccessary elements from the dom
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');

// Default city when the page loads
let cityInput = "Johannesburg";

// click - event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        // change from the default city to the clicked one
        cityInput = e.target.innerHTML;

        // function that fetches and displays all the data
        // from the weather API
        fetchWeatherData();
        // fade out app animation
        app.style.opacity = "0";
    });
})

// form submit button event listener
form.addEventListener('submit', (e) => {
    // if the search is empty, throw an alert
    if(search.value.length == 0) {
        alert("Please type in a city name");
    }
    else {
        // change from default city to the one written on search
        cityInput = search.value;

        // function that fetches and displays all the data
        // from the weather API
        fetchWeatherData();

        // remove all text from the input field
        search.value = "";
        // animation -- fade out app
        app.style.opacity = "0";
    }

    // prevent default behavior of the form
    e.preventDefault();
});

// Function that returns day of the week
function dayOfTheWeek(day, month, year) {
    // list
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date('${day}/{month}/${year}').getDay()];
};

// function that fetches and displays data from the weather API
function fetchWeatherData() {
    // fetch the data
    // add the city name with template literals
    // 
http://api.weatherapi.com/v1/current.json?key=a9d1f047fb344fdcb27193907221612&q=Johannesburg&aqi=no
    fetch(`http://api.weatherapi.com/v1/current.json?key=a9d1f047fb344fdcb27193907221612=${cityInput}`)
    // take the data (json format) and convert it to regular js object
    .then(response => response.json())
    .then(data => {
        // console log the data to see what is available
        console.log(data);

        // add temperature and weather conditions to the page
        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;

        // get the date and time from the city and extract the day, month, year
        // and time into separate variables
        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);

        // change date format
        // original = 2022-12-14 10:53
        // new = 10:53 - Wednesday 14, 12 2022
        dateOutput.innerHTML = '${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}';
        timeOutput,innerHTML = time;
        // add new city to the page
        nameOutput.innerHTML = data.location.name;
        // get the right data for weather extraction
        const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length);
            // reformat the icon url to own local folder path and add it the the page
            icon.src = "./icons/" + iconId;
            
            // add weather details to the page
            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h";

            // set default time of day
            let timeOfDay = "day";
            // get unique id for each weather condition
            const code = data.current.condition.code;

            // change to night if its night time in the city
            if(!data.current.is_day) {
                timeOfDay = "night";
            }

            if(code == 1000) {
                // set background image according to condition of the weather
                app.style.backgroundImage = `
                    url(./images/${timeOfDay}/clear.jpg)`;
                
                // change button color if night
                btn.style.background = "#e5ba92";
                if(timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
                
            }
            // cloudy weather
            else if (
                code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1069 ||
                code == 1087 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282

            ) {
                app.style.backgroundImage = `
                    url(./images/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = "fa6d1b";
                if(timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
                // rain
                else if (
                    code == 1063 ||
                    code == 1069 ||
                    code == 1072 ||
                    code == 1150 ||
                    code == 1180 ||
                    code == 1183 ||
                    code == 1186 ||
                    code == 1189 ||
                    code == 1192 ||
                    code == 1195 ||
                    code == 1204 ||
                    code == 1207 ||
                    code == 1240 ||
                    code == 1243 ||
                    code == 1246 ||
                    code == 1249 ||
                    code == 1252
                ){
                    app.style.backgroundImage = `
                        url(./images/${timeOfDay}/rainy.jpg)`;
                    btn.style.background = "#647d75";
                    if(timeOfDay == "night") {
                        btn.style.background = "#325c80";
                    }
                    else {
                        app.style.backgroundImage = `
                            url(./images/${timeOfDay}/snowy.jpg)`;
                        btn.style.background = "#4d72aa";
                        if(timeOfDay == "night") {
                            btn.style.background = "#1b1b1b";
                        }
                    }
                    // animation
                    app.style.opacity = "1";
                }
            }
    }).catch(() => {
        alert('City not found, please try again');
        app.style.opacity = "1";
    });
}

// call function on page load
fetchWeatherData();

app.style.opacity = "1";