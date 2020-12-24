let $screen;
let $menu;
let $text;
let $clock;
let $emptyScreen;
let elements = {};

let init = function () {
    $screen = $("#screen");
    $menu = $("#menu");
    $text = $("#text");
    $emptyScreen = $("#emptyScreen");
    $clock = $("#clock");
    $.i18n().load({
        fr: './i18n/messages-fr.json',
        en: './i18n/messages-en.json'
    });
};

$(document).ready(function () {
    init();


    $text.on('click', function () {
        addText($screen);
    });
    $clock.on('click', function () {
        addClock($screen);
    });


    $emptyScreen.click(function () {
        $screen.empty();
    });
});