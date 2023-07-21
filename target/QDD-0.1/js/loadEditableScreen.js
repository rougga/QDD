function loadEditableScreen(elms) {
    let elements = JSON.parse(elms);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        loadElement(element);
    }
}
let loadElement = function (element) {
    switch (element.type) {
        case '@text':
            loadText(element);
            break;
        case '@clock':
            loadClock(element);
            break;
        case '@date':
            loadDate(element);
            break;
        case '@image':
            loadImage(element);
            break;
        case '@video':
            loadVideo(element);
            break;
        case '@weather':
            loadWeather(element);
            break;
        case '@news':
            loadNews(element);
            break;
        case '@rollingText':
            loadRollingText(element);
            break;

    }
};
///
function loadText(elm) {
    let textDOM = "<div class='"
            + elm.divClass
            + " "
            + elm.border
            + "' "
            + " id='" + elm.id + "' "
            + " data-id='" + elm.id + "'"
            + " data-type='@text'"
            + " data-x='" + elm.x + "'"
            + " data-y='" + elm.y + "' "
            + " style='"
            + "color:" + elm.color
            + ";background-color:" + elm.bgColor
            + ";width:" + elm.width + "px"
            + ";height:" + elm.height + "px"
            + ";transform:translate(" + elm.x + "px," + elm.y + "px)"
            + "'>"
            + "<h6 class='"
            + elm.class
            + "' "
            + " style='"
            + "font-size:" + elm.size
            + "'>" + elm.text + "</h6>"
            + "</div>"
            ;
    $("#screen").append(textDOM);
}
function loadClock(clockObj) {
    let clockDOM = "<div class='"
            + clockObj.divClass
            + "' "
            + " id='" + clockObj.id + "' "
            + " data-id='" + clockObj.id + "'"
            + " data-type='@clock'"
            + " data-x='" + clockObj.x + "'"
            + " data-y='" + clockObj.y + "' "
            + " style='"
            + "color:" + clockObj.color
            + ";background-color:" + clockObj.bgColor
            + ";width:" + clockObj.width + "px"
            + ";height:" + clockObj.height + "px"
            + ";left:" + clockObj.left + "px"
            + ";top:" + clockObj.top + "px"
            + ";transform:translate(" + clockObj.x + "px," + clockObj.y + "px)"
            + "'>"
            + "<h6 class='"
            + clockObj.class
            + "' "
            + " style='"
            + "font-size:" + clockObj.size
            + "'></h6>"
            + "</div>"
            ;
    $("#screen").append(clockDOM);
}
function loadDate(dateObj) {
    let clockDOM = "<div class='"
            + dateObj.divClass
            + "' "
            + " id='" + dateObj.id + "' "
            + " data-id='" + dateObj.id + "'"
            + " data-type='@date'"
            + " data-x='" + dateObj.x + "'"
            + " data-y='" + dateObj.y + "' "
            + " style='"
            + "color:" + dateObj.color
            + ";background-color:" + dateObj.bgColor
            + ";width:" + dateObj.width + "px"
            + ";height:" + dateObj.height + "px"
            + ";left:" + dateObj.left + "px"
            + ";top:" + dateObj.top + "px"
            + ";transform:translate(" + dateObj.x + "px," + dateObj.y + "px)"
            + "'>"
            + "<h6 class='"
            + dateObj.class
            + "' "
            + " style='"
            + "font-size:" + dateObj.size
            + "'></h6>"
            + "</div>"
            ;
    $screen.append(clockDOM);
}
function loadImage(imageObj) {
    let imageDOM = "<div class=' "
            + imageObj.divClass
            + "' "
            + " id='" + imageObj.id + "' "
            + " data-id='" + imageObj.id + "'"
            + " data-type='@image'"
            + " data-x='" + imageObj.x + "'"
            + " data-y='" + imageObj.y + "' "
            + " style='"
            + "width:" + imageObj.width + "px"
            + ";height:" + imageObj.height + "px"
            + ";left:" + imageObj.left + "px"
            + ";top:" + imageObj.top + "px"
            + ";transform:translate(" + imageObj.x + "px," + imageObj.y + "px)"
            + "'>"
            + "<img class='"
            + imageObj.class
            + "' src='" + imageObj.imageUrl + "'"
            + "/>"
            + "</div>"
            ;
    $screen.append(imageDOM);

}
function loadVideo() {

}
function loadWeather(elm) {
    let weatherDOM = "<div class='"
            + elm.divClass
            + " "
            + elm.border
            + "' "
            + " id='" + elm.id + "' "
            + " data-id='" + elm.id + "'"
            + " data-type='@weather'"
            + " data-x='" + elm.x + "'"
            + " data-y='" + elm.y + "' "
            + " data-location='" + elm.location + "'"
            + " style='"
            + "color:" + elm.color
            + ";background-color:" + elm.bgColor
            + ";width:" + elm.width + "px"
            + ";height:" + elm.height + "px"
            + ";transform:translate(" + elm.x + "px," + elm.y + "px)"
            + "'>"
            + "<h6 class='"
            + elm.class
            + "' "
            + " style='"
            + "font-size:" + elm.size
            + "'>" + elm.text + "</h6>"
            + "</div>"
            ;
    $("#screen").append(weatherDOM);
}
function loadNews() {

}
function loadRollingText(elm) {
    let rollingTextDOM = "<div class='"
            + elm.divClass
            + " "
            + elm.border
            + "' "
            + " id='" + elm.id + "' "
            + " data-id='" + elm.id + "' "
            + " data-type='rollingText' "
            + " data-x='" + elm.x + "'"
            + " data-y='" + elm.y + "' "
            + " style='"
            + "color:" + elm.color
            + ";background-color:" + elm.bgColor
            + ";width:" + elm.width + "px"
            + ";height:" + elm.height + "px"
            + ";transform:translate(" + elm.x + "px," + elm.y + "px)"
            + "'>"
            + "<h6 class='"
            + elm.class
            + "' "
            + " style='"
            + "font-size:" + elm.size
            + ";overflow:hidden;"
            + "height:" + elm.height + ";'>"
            + elm.text
            + "</h6>"
            + "</div>"
            ;
    $("#screen").append(rollingTextDOM);
}
function loadApp1() {

}