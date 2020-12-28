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
    //
    $.i18n().load({
        fr: './i18n/messages-fr.json',
        en: './i18n/messages-en.json',
        ar: './i18n/messages-ar.json'
    });
};

//getting modal ready
let setModal = function (type) {
    $formGroups.hide();
    $addElementBtn.html($.i18n("styling.form.add.element"));
    $closeModalBtn.html($.i18n("styling.form.close"));
    switch (type) {
        case '@text':
            $modalTitle.html($.i18n("styling.form.title.add.text"));
            $textGroup.show();
            $colorGroup.show();
            $bgColorGroup.show();
            $hAlignGroup.show();
            $vAlignGroup.show();
            $borderGroup.show();
            $sizeGroup.show();
            $fontWeightGroup.show();
            break;
        case '@clock':
            $modalTitle.html($.i18n("styling.form.title.add.clock"));
            $colorGroup.show();
            $bgColorGroup.show();
            $hAlignGroup.show();
            $vAlignGroup.show();
            $borderGroup.show();
            $sizeGroup.show();
            $fontWeightGroup.show();
            break;
        case '@date':
            $modalTitle.html($.i18n("styling.form.title.add.date"));
            $colorGroup.show();
            $bgColorGroup.show();
            $hAlignGroup.show();
            $vAlignGroup.show();
            $borderGroup.show();
            $sizeGroup.show();
            $fontWeightGroup.show();
            break;
        case '@image':
            $modalTitle.html($.i18n("styling.form.title.add.image"));
            $borderGroup.show();
            $fileGroup.show();
            break;

    }
};

$(document).ready(function () {
    init();
    $modal.on('show.bs.modal', function (event) {
        type = $(event.relatedTarget).data('type');
        setModal(type);
    });

    $emptyScreenBtn.click(function () {
        $screen.empty();
    });
    $addElementBtn.click(function () {
        addElement(type);
        $modal.modal('toggle');
    });
    $saveBtn.click(function () {
        saveScreen();
    });
    $previewBtn.click(function () {
        window.open("./");
    });
    $sizeInput.on('change', function () {
        $sizeInfo.html($(this).val());
    });
});