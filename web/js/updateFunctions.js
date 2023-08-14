const capitalize = (s) => {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
function getWeather(location) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
        $($elm).html(Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + capitalize(data.weather[0].description));
    });
}
function getWeather(location, $elm) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
        $($elm).html(Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + capitalize(data.weather[0].description));
    });
}
function updateTime() {
    $('.clock').html(moment().format('HH:mm:ss'));
    $('.date').html(moment().format('DD-MM-YYYY'));
}
function updateWeather() {
    $forcast = $(".forcast");
    for (let i = 0; i < $forcast.length; i++) {
        getWeather($($forcast[i]).parent(".element").attr('data-location'), $forcast[i]);
    }
}

function update() {
    updateTime();
    updateWeather();
}

setInterval(update, 1000);