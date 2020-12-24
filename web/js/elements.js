let df_elements = {
    textObj: {
        id: "text",
        df_width: "300px",
        df_height: "100px",
        df_color: "white",
        df_bg_color: "green",
        df_html: "<p class='p-1'>Text Demo</p>",
        df_script: "<script></script>"
    },
    clockObj:{
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
function addText(to) {
    let textObj = getTextObj();
    let textDOM = "<div class='resize-drag' data-id='" + textObj.id + "' data-x='0' data-y='0' style='color:" + textObj.df_color + ";background-color:" + textObj.df_bg_color + ";width:" + textObj.df_width + ";height:" + textObj.df_height + "'>"
            + textObj.df_html
            + textObj.df_script
            + "</div>"
            ;
    to.append(textDOM);
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
function updateClock(){
    $('.clock').html(moment().format('HH:mm:ss'));
}
setInterval(updateClock,1000);