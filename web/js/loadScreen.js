let $screen;

function init() {
    $screen = $("#screen");
}
function updateClock() {
    $('.clock').html(moment().format('HH:mm:ss'));
}

function loadScreen() {
    let elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
}


$(document).ready(function () {
    init();
    loadScreen();
    setInterval(updateClock, 1000);
});