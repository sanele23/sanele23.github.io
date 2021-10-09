function shoes() {
    const weather = document.getElementById('weather').value;

    let shoes;

    switch(weather) {

        case 'hot':
        shoes = 'scandals';
        break;

        case 'rain':
        shoes = 'galoshes';
        break;

        case 'snow':
        shoes = 'boots';
        break;
    }
    document.getElementById('output').innerHTML = shoes;

}