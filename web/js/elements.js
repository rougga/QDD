let df_elements = {
    textObj: {
        id: "text01",
        df_width: "300px",
        df_height: "100px",
        df_color: "white",
        df_bg_color: "green",
        df_html: "<h6 class='p-1 d-block w-100'>Text Demo</h6>",
        df_script: "<script></script>"
    },
    clockObj: {
        id: "clock",
        df_width: "300px",
        df_height: "100px",
        df_color: "white",
        df_bg_color: "black",
        df_html: "<h1 class='p-1 text-center w-100 clock'>00:00:00</h1>",
        df_script: "<script></script>"
    }
};
function getTextObj() {
    return df_elements.textObj;
}
function getClockObj() {
    return df_elements.clockObj;
}
function addText() {
    let textObj = getTextObj();
    textObj.id = Math.floor(Math.random() * 100);
    textObj.df_color = $colorInput.val();
    textObj.df_bg_color = $bgColorInput.val();
    let textDOM = "<div class='resize-drag element row' "
            + " id='" + textObj.id + "' "
            + " data-id='" + textObj.id + "'"
            + " data-type='@text'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + "color:" + textObj.df_color
            + ";background-color:" + textObj.df_bg_color
            + ";width:" + textObj.df_width
            + ";height:" + textObj.df_height
            + "'>"
            + "<h6 class='"
            + " p-1 "
            + " w-100 "
            + $($vAlignInput.filter(":checked")[0]).val()
            + "' "
            + " style='"
            + "text-align: " + $($hAlignInput.filter(":checked")[0]).val()
            + "'>" + $textInput.val() + "</h6>"
            + textObj.df_script
            + "</div>"
            ;
    $screen.append(textDOM);
}
function addClock(to) {
    let clockObj = getClockObj();
    let clockDOM = "<div class='resize-drag' data-id='" + clockObj.id + "' data-x='0' data-y='0' style='color:" + clockObj.df_color + ";background-color:" + clockObj.df_bg_color + ";width:" + clockObj.df_width + ";height:" + clockObj.df_height + "'>"
            + clockObj.df_html
            + clockObj.df_script
            + "</div>"
            ;
    to.append(clockDOM);
}
function updateClock() {
    $('.clock').html(moment().format('HH:mm:ss'));
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
            class: $($elements[i]).find("h6").attr("class"),
            url: '',
            size: '',
            font: '',
            fontWeight: ''
        };
        toSave.push(element);
    }
    localStorage.setItem("elements", JSON.stringify(toSave));
    console.log(toSave);
}

setInterval(updateClock, 1000);