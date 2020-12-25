//divs
let $screen;
let $menu;
let $modal;

//buttons
let $text;
let $clock;
let $image;
let $video;
let $weather;
let $news;
let $emptyScreen;
let $save;

//global vars
let elements = {};

//initialization
let init = function () {
    $screen = $("#screen");
    $menu = $("#menu");
    $text = $("#text");
    $clock = $("#clock");
    $image = $("#image");
    $video = $("#video");
    $weather = $("#weather");
    $news = $("#news");
    $save = $("#save");
    $modal = $('#modal');
    $emptyScreen = $("#emptyScreen");
    $.i18n().load({
        fr: './i18n/messages-fr.json',
        en: './i18n/messages-en.json',
        ar: './i18n/messages-ar.json'
    });
};

//getting modal ready
let setModal = function (btn) {
    console.log(btn);
    switch (btn){
        
    }
};

$(document).ready(function () {
    init();
    
    $modal.on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget); 
        let type = button.data('type');
        setModal(type);
    });

    $emptyScreen.click(function () {
        $screen.empty();
    });
});