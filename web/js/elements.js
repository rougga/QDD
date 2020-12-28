let df_elements = {
    textObj: {
        id: "text01",
        dfWidth: "300px",
        dfHeight: "100px",
        dfColor: "white",
        dfBgColor: "green",
        size: '16',
        border: '',
        dfHtml: "<h6 class='p-1 d-block w-100'>Text Demo</h6>",
        dfScript: "<script></script>"
    },
    clockObj: {
        id: "clock",
        dfWidth: "300px",
        dfHeight: "100px",
        dfColor: "white",
        dfBgColor: "black",
        size: '16',
        border: '',
        dfHtml: "<h1 class='p-1 text-center w-100 clock'>00:00:00</h1>",
        dfScript: "<script></script>"
    },
    dateObj: {
        id: "date",
        dfWidth: "300px",
        dfHeight: "100px",
        dfColor: "white",
        dfBgColor: "black",
        size: '16',
        border: '',
        dfHtml: "<h1 class='p-1 text-center w-100 date'>00:00:00</h1>",
        dfScript: "<script></script>"
    },
    imageObj: {
        id: "image",
        dfWidth: "300px",
        dfHeight: "300px",
        border: '',
        url: 'c:/QDD/img/df1.png',
        dfHtml: "<img class='p-1  w-100 date'/>",
        dfScript: "<script></script>"
    }
};
function getTextObj() {
    return df_elements.textObj;
}
function getClockObj() {
    return df_elements.clockObj;
}
function getDateObj() {
    return df_elements.dateObj;
}
function getImageObj() {
    return df_elements.imageObj;
}
function addElement(type) {
    switch (type) {
        case '@text':
            addText();
            break;
        case '@clock':
            addClock();
            break;
        case  '@date':
            addDate();
            break;
        case '@image':
            addImage();
            break;
    }
}
function addText() {
    let textObj = getTextObj();
    textObj.id = Math.floor(Math.random() * 400);
    textObj.dfColor = $colorInput.val();
    textObj.dfBgColor = $bgColorInput.val();
    textObj.size = $sizeInput.val();
    if ($borderInput.prop("checked")) {
        textObj.border = "border";
    } else
    {
        textObj.border = "";
    }
    let textDOM = "<div class='resize-drag element row "
            + textObj.border
            + "' "
            + " id='" + textObj.id + "' "
            + " data-id='" + textObj.id + "'"
            + " data-type='@text'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + "color:" + textObj.dfColor
            + ";background-color:" + textObj.dfBgColor
            + ";width:" + textObj.dfWidth
            + ";height:" + textObj.dfHeight
            + "'>"
            + "<h6 class='"
            + " p-1 "
            + " w-100 "
            + $($vAlignInput.filter(":checked")[0]).val()
            + " "
            + $($hAlignInput.filter(":checked")[0]).val()
            + " "
            + $($fontWeightInput.filter(":checked")[0]).val()
            + " "
            + "' "
            + " style='"
            + "font-size:" + textObj.size + "px"
            + "'>" + $textInput.val() + "</h6>"
            + textObj.dfScript
            + "</div>"
            ;
    $screen.append(textDOM);
}
function addClock() {
    let clockObj = getClockObj();
    clockObj.id = Math.floor(Math.random() * 400);
    clockObj.dfColor = $colorInput.val();
    clockObj.dfBgColor = $bgColorInput.val();
    clockObj.size = $sizeInput.val();
    if ($borderInput.prop("checked")) {
        clockObj.border = "border";
    } else
    {
        clockObj.border = "";
    }
    let clockDOM = "<div class='resize-drag element row "
            + clockObj.border
            + "' "
            + " id='" + clockObj.id + "' "
            + " data-id='" + clockObj.id + "'"
            + " data-type='@clock'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + "color:" + clockObj.dfColor
            + ";background-color:" + clockObj.dfBgColor
            + ";width:" + clockObj.dfWidth
            + ";height:" + clockObj.dfHeight
            + "'>"
            + "<h6 class='"
            + " p-1 "
            + " w-100 "
            + " clock "
            + $($vAlignInput.filter(":checked")[0]).val()
            + " "
            + $($hAlignInput.filter(":checked")[0]).val()
            + " "
            + $($fontWeightInput.filter(":checked")[0]).val()
            + "' "
            + " style='"
            + "font-size:" + clockObj.size + "px"
            + "'></h6>"
            + clockObj.dfScript
            + "</div>"
            ;
    $screen.append(clockDOM);
}
function addDate() {
    let dateObj = getDateObj();
    dateObj.id = Math.floor(Math.random() * 400);
    dateObj.dfColor = $colorInput.val();
    dateObj.dfBgColor = $bgColorInput.val();
    dateObj.size = $sizeInput.val();
    if ($borderInput.prop("checked")) {
        dateObj.border = "border";
    } else
    {
        dateObj.border = "";
    }
    let clockDOM = "<div class='resize-drag element row "
            + dateObj.border
            + "' "
            + " id='" + dateObj.id + "' "
            + " data-id='" + dateObj.id + "'"
            + " data-type='@date'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + "color:" + dateObj.dfColor
            + ";background-color:" + dateObj.dfBgColor
            + ";width:" + dateObj.dfWidth
            + ";height:" + dateObj.dfHeight
            + "'>"
            + "<h6 class='"
            + " p-1 "
            + " w-100 "
            + " date "
            + $($vAlignInput.filter(":checked")[0]).val()
            + " "
            + $($hAlignInput.filter(":checked")[0]).val()
            + " "
            + $($fontWeightInput.filter(":checked")[0]).val()
            + "' "
            + " style='"
            + "font-size:" + dateObj.size + "px"
            + "'></h6>"
            + dateObj.dfScript
            + "</div>"
            ;
    $screen.append(clockDOM);
}
function addImage() {
    let imageObj = getImageObj();
    imageObj.id = Math.floor(Math.random() * 400);

    if ($borderInput.prop("checked")) {
        imageObj.border = "border";
    } else
    {
        imageObj.border = "";
    }
    let imageDOM = "<div class='resize-drag element row "
            + imageObj.border
            + "' "
            + " id='" + imageObj.id + "' "
            + " data-id='" + imageObj.id + "'"
            + " data-type='@image'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + ";width:" + imageObj.dfWidth
            + ";height:" + imageObj.dfHeight
            + "'>"
            + "<img class='"
            + " p-0 m-0"
            + " w-100 "
            + " h-100 "
            + " image "
            + "' "
            + " src='" + imageObj.url + "'"
            + " style='"
            + "font-size:" + imageObj.size + "px"
            + "'/>"
            + imageObj.dfScript
            + "</div>"
            ;
    $screen.append(imageDOM);
}

function updateTime() {
    $('.clock').html(moment().format('HH:mm:ss'));
    $('.date').html(moment().format('DD-MM-YYYY'));
}

function saveScreen() {
    $elements = $(".element");
    let toSave = [];
    for (let i = 0; i < $elements.length; i++) {
        let element = {
            type: $($elements[i]).attr('data-type'),
            id: $($elements[i]).attr('data-id'),
            top: $($elements[i]).offset().top,
            left: $($elements[i]).offset().left,
            width: $($elements[i]).width(),
            height: $($elements[i]).height(),
            color: $($elements[i]).css("color"),
            bgColor: $($elements[i]).css("background-color"),
            text: $($elements[i]).find("h6").html(),
            class: $($elements[i]).find("h6").attr("class") || $($elements[i]).find("img").attr("class"),
            divClass: $($elements[i]).attr("class"),
            x: $($elements[i]).attr('data-x'),
            y: $($elements[i]).attr('data-y'),
            imageUrl: $($elements[i]).find("img").attr('src'),
            videoUrl: '',
            size: $($elements[i]).find("h6").css("font-size"),
            font: '',
            location: ''
        };
        toSave.push(element);
    }
    localStorage.setItem("elements", JSON.stringify(toSave));
    console.log("Saved " + toSave.length + " Elements");
}

setInterval(updateTime, 1000);