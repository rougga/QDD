//divs
let $screen;
let $menu;
let $modal;
//buttons
let $textBtn;
let $clockBtn;
let $dateBtn;
let $imageBtn;
let $videoBtn;
let $weatherBtn;
let $newsBtn;
let $emptyScreenBtn;
let $saveBtn;
let $closeModalBtn;
let $addElementBtn;
let $modalTitle;
let $formGroups;
let $previewBtn;
//form div
let $modalForm;
let $textGroup;
let $colorGroup;
let $bgColorGroup;
let $hAlignGroup;
let $vAlignGroup;
let $borderGroup;
let $sizeGroup;
let $sizeInfo;
let $fontWeightGroup;
let $fileGroup;
let $fileLabel;
//form input
let $textInput;
let $colorInput;
let $bgColorInput;
let $hAlignInput;
let $vAlignInput;
let $borderInput;
let $sizeInput;
let $fontWeightInput;
let $fileInput;
//global vars
let $elements;
let type;
//initialization
let init = function () {
    //
    $screen = $("#screen");
    $menu = $("#menu");
    //
    $textBtn = $("#text");
    $clockBtn = $("#clock");
    $dateBtn = $("#date");
    $imageBtn = $("#image");
    $videoBtn = $("#video");
    $weatherBtn = $("#weather");
    $newsBtn = $("#news");
    $saveBtn = $("#save");
    $emptyScreenBtn = $("#emptyScreen");
    $addElementBtn = $("#addElement");
    $closeModalBtn = $("#closeModalBtn");
    $previewBtn = $("#preview");
    //
    $modal = $('#modal');
    //
    $modalTitle = $("#ModalLabel");
    //
    $modalForm = $("#modalForm");
    $formGroups = $(".form-group");
    $textGroup = $("#textGroup");
    $colorGroup = $("#colorGroup");
    $bgColorGroup = $("#bgColorGroup");
    $hAlignGroup = $("#hAlignGroup");
    $vAlignGroup = $("#vAlignGroup");
    $borderGroup = $("#borderGroup");
    $sizeGroup = $("#sizeGroup");
    $sizeInfo = $("#sizeInfo");
    $fontWeightGroup = $("#fontWeightGroup");
    $fileGroup = $("#fileGroup");
    $locationGroup = $("#locationGroup");
    $fileLabel = $("#fileLabel");
    //
    $textInput = $("#textInput");
    $colorInput = $("#colorInput");
    $bgColorInput = $("#bgColorInput");
    $hAlignInput = $("input[name='hAlignInput']");
    $vAlignInput = $("input[name='vAlignInput']");
    $borderInput = $("#borderInput");
    $sizeInput = $("#sizeInput");
    $fontWeightInput = $("input[name='fontWeightInput']");
    $fileInput = $("#fileInput");
    $locationInput = $("#locationInput");
    //
    $.i18n().load({
        fr: './i18n/messages-fr.json',
        en: './i18n/messages-en.json',
        ar: './i18n/messages-ar.json'
    });
};


let config = function () {
    let menuHeight = 60;
    let screenHeight = $(document).height() - 60;
    $menu.height(menuHeight);
    $screen.height(screenHeight);
};

