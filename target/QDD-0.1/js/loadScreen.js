
let loadElement = function (type, element) {
    switch (type) {
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
            loadVideo(element)
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
        case 'app1':
            loadApp1(element);
            break;

    }
};
function loadScreen(elms) {
    //let elements = JSON.parse(localStorage.getItem("elements"));
    let elements = JSON.parse(elms);
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        loadElement(element.type, element);
    }
}
function loadText(element) {
    let textDOM = "<div class=' "
        + element.divClass
        + " ' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " data-x='" + element.x + "'"
        + " data-y='" + element.y + "'"
        + " style='"
        + "color:" + element.color
        + ";background-color:" + element.bgColor
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<h6 class='"
        + element.class
        + "' "
        + " style='"
        + "font-size:" + element.size
        + "'>"
        + element.text +
        "</h6>"
        + "</div>"
        ;
    $screen.append(textDOM);
}
function loadClock(element) {
    let clockDOM = "<div class='"
        + element.divClass
        + "' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " style='"
        + "color:" + element.color
        + ";background-color:" + element.bgColor
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<h6 class='"
        + element.class
        + "' "
        + " style='"
        + "font-size:" + element.size
        + "'>"
        + "</h6>"
        + "</div>"
        ;
    $screen.append(clockDOM);
}
function loadDate(element) {
    let dateDOM = "<div class='"
        + element.divClass
        + "' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " style='"
        + "color:" + element.color
        + ";background-color:" + element.bgColor
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<h6 class='"
        + element.class
        + "' "
        + " style='"
        + "font-size:" + element.size
        + "'>"
        + "</h6>"
        + "</div>"
        ;
    $screen.append(dateDOM);
}
function loadImage(element) {
    let imageDOM = "<div class='"
        + element.divClass
        + "' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " style='"
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<img class='"
        + element.class
        + "' "
        + " src='"
        + element.imageUrl
        + "'"
        + " style='"
        + "'/>"
        + "</div>"
        ;
    $screen.append(imageDOM);
}
function loadVideo(element) {
    let videoDOM = "<div class='"
        + element.divClass
        + "' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " style='"
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<video class='"
        + element.class
        + "' "
        + " style='"
        + "width:" + element.width + "px;"
        + "height:" + element.height + "px"
        + "'>"
        + "<source src='" + element.url + "' type='video/mp4'>"
        + "</video>"
        + "</div>"
        ;
    $screen.append(videoDOM);
}
function loadNews(element) {
    let newDOM;
}
function loadWeather(element) {
    let weatherDOM="<div class=' "
        + element.divClass
        + " ' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " data-x='" + element.x + "'"
        + " data-y='" + element.y + "'"
+" data-location='"+element.location+"'"
        + " style='"
        + "color:" + element.color
        + ";background-color:" + element.bgColor
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + "'>"
        + "<h6 class=' forcast "
        + element.class
        + "' "
        + " style='"
        + "font-size:" + element.size
        + "'>"
        + element.text +
        "</h6>"
        + "</div>"
        ;
    $screen.append(weatherDOM);
}
function loadRollingText(element) {
    let rollingTextDOM= "<div class=' "
        + element.divClass
        + " ' "
        + " id='" + element.id + "' "
        + " data-id='" + element.id + "'"
        + " data-type='" + element.type + "'"
        + " data-x='" + element.x + "'"
        + " data-y='" + element.y + "'"
        + " style='"
        + "color:" + element.color
        + ";background-color:" + element.bgColor
        + ";width:" + element.width + "px"
        + ";height:" + element.height + "px"
        + ";position:absolute"
        + ";top:" + element.top + "px"
        + ";left:" + element.left + "px"
        + ";overflow:hidden;'>"
        + "<h6 class='"
        + element.class
        + "' "
        + " style='"
        + "font-size:" + element.size
        + ";height:"+element.height + "px;'>"
        + element.text +
        "</h6>"
        + "</div>"
        ;
    $screen.append(rollingTextDOM);
}
function loadApp1(element) {
    let app1;
}
