function updateTime() {
    $('.clock').html(moment().format('HH:mm:ss'));
    $('.date').html(moment().format('DD-MM-YYYY'));
}
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
    }
};
function loadScreen() {
    let elements = JSON.parse(localStorage.getItem("elements"));
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