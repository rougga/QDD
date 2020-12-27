let $screen;

function init() {
    $screen = $("#screen");
}

$(document).ready(function () {
    init();
    loadScreen();
    setInterval(updateClock, 1000);
});