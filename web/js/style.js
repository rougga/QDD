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
let $addElement;

//global vars
let elements = {};
let type;
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
    $addElement = $("#addElement");
    $.i18n().load({
        fr: './i18n/messages-fr.json',
        en: './i18n/messages-en.json',
        ar: './i18n/messages-ar.json'
    });
};

//getting modal ready
let setModal = function (type) {
    console.log(type);
    switch (type) {

    }
};
let addElement = function (type) {
    console.log(type);
    switch (type){
        
    }
};
$(document).ready(function () {
    init();

    $modal.on('show.bs.modal', function (event) {
        type = $(event.relatedTarget).data('type');
        setModal(type);
    });

    $emptyScreen.click(function () {
        $screen.empty();
    });
    $addElement.click(function () {
        addElement(type);
        $modal.modal('toggle');
    });
});