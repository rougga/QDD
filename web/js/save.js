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
            videoUrl: $($elements[i]).find("video source").attr('src'),
            size: $($elements[i]).find("h6").css("font-size"),
            font: '',
            location: $($elements[i]).attr('data-location')
        };
        toSave.push(element);
    }
    //local caxhe
    //localStorage.setItem("elements", JSON.stringify(toSave));
    //saving fto xml
    $.get("savescreen", {id: screenId, data: JSON.stringify(toSave)}, function success(data) {
        console.log("Saved to XML");
    });

    console.log("Saved " + toSave.length + " Elements");
}
