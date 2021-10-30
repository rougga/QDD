function loadEditableScreen(elms) {
    let elements = JSON.parse(elms);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        loadElement(element.type, element);
    }
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
            + " data-x='"+elm.x+"'"
            + " data-y='"+elm.y+"' "
            + " style='"
            + "color:" + elm.color
            + ";background-color:" + elm.bgColor
            + ";width:" + elm.width +"px"
            + ";height:" + elm.height +"px"
            +";transform:translate("+elm.x+"px,"+elm.y+"px)"
            + "'>"
            + "<h6 class='"
            + elm.class   
            + "' "
            + " style='"
            + "font-size:" + elm.size
            + "'>" + elm.text+ "</h6>"
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
            + " data-x='"+clockObj.x+"'"
            + " data-y='"+clockObj.y+"' "
            + " style='"
            + "color:" + clockObj.color
            + ";background-color:" + clockObj.bgColor
            + ";width:" + clockObj.width +"px"
            + ";height:" + clockObj.height + "px"
            + ";left:"+ clockObj.left +"px"
            +   ";top:"+clockObj.top +"px"
            +";transform:translate("+clockObj.x+"px,"+clockObj.y+"px)"
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
    let filename = $fileInput.val().substring($fileInput.val().lastIndexOf('\\') + 1, $fileInput.val().length);
    uploadImage(filename);
    imageObj.id = Math.floor(Math.random() * 400);
    let url = imageObj.url + filename;
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
            + " src='" + url + "'"
            + " style='"
            + "font-size:" + imageObj.size + "px"
            + "'/>"
            + imageObj.dfScript
            + "</div>"
            ;
    $screen.append(imageDOM);

}