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
            $fileInput.attr("accept", "image/*");
            $modalForm.attr("method", "POST");
            $modalForm.attr("enctype", "multipart/form-data");
            break;
        case '@video':
            $modalTitle.html($.i18n("styling.form.title.add.video"));
            $borderGroup.show();
            $fileGroup.show();
            $fileInput.attr("accept", "video/*");
            $modalForm.attr("method", "POST");
            $modalForm.attr("enctype", "multipart/form-data");
            break;
        case '@weather':
            $modalTitle.html($.i18n("styling.form.title.add.weather"));
            $colorGroup.show();
            $bgColorGroup.show();
            $hAlignGroup.show();
            $vAlignGroup.show();
            $borderGroup.show();
            $sizeGroup.show();
            $fontWeightGroup.show();
            $locationGroup.show();
            break;
        case '@news':
            break;
        case '@rollingText':
            $modalTitle.html($.i18n("styling.form.title.add.rollingText"));
            $textGroup.show();
            $colorGroup.show();
            $bgColorGroup.show();
            $hAlignGroup.show();
            $vAlignGroup.show();
            $borderGroup.show();
            $sizeGroup.show();
            $fontWeightGroup.show();
            break;
        case 'app1':
            $modalTitle.html($.i18n("styling.form.title.add.app1"));

            break;
    }
};

$(document).ready(function () {
    init();
    config();
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
    /*$previewBtn.click(function () {
        window.open("./");
    });
    */
    $sizeInput.on('change', function () {
        $sizeInfo.html($(this).val());
    });
    $fileInput.on('change', function () {
        $fileLabel.html($fileInput.val().substring($fileInput.val().lastIndexOf('\\') + 1, $fileInput.val().length));
    });
    $(window).on('resize', function () {
        config();
    });
});