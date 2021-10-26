let $screen;
function init() {
    $screen = $("#screen");
}

$(document).ready(function () {
    init();
    //loadScreen();
    setInterval(updateTime, 1000);
});