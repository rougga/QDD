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
        url: './img/upload/',
        dfHtml: "<img class='p-1  w-100 date'/>",
        dfScript: "<script></script>"
    },
    videoObj: {
        id: "video",
        dfWidth: "300px",
        dfHeight: "300px",
        border: '',
        url: './vid/upload/',
        dfHtml: '<video width="300" height="300" controls><source src="movie.mp4" type="video/mp4"></video>',
        dfScript: "<script></script>"

    },
    weatherObj: {
        id: "weather",
        dfWidth: "300px",
        dfHeight: "300px",
        dfColor: "white",
        dfBgColor: "black",
        size: '16',
        border: '',
        location: 'Rabat,Maroc',
        dfHtml: "",
        dfScript: "<script></script>"
    },
    rollingTextObj: {
        id: "rollingText",
        dfWidth: "900px",
        dfHeight: "30px",
        dfColor: "white",
        dfBgColor: "red",
        size: '16',
        border: '',
        dfHtml: "<h6 class='p-1 d-block w-100'>Text Demo</h6>",
        dfScript: "<script></script>"
    },
    app1Obj: {
        id: "app1",
        dfWidth: "300px",
        dfHeight: "300px",
        dfColor: "white",
        dfBgColor: "black",
        size: '16',
        border: '',
        dfHtml: "",
        dfScript: "<script></script>"
    }
};

//getters
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
function getVideoObj() {
    return df_elements.videoObj;
}
function getWeatherObj() {
    return df_elements.weatherObj;
}
function getRollingTextObj() {
    return df_elements.rollingTextObj;
}
function getApp1Obj() {
    return df_elements.app1Obj;
}
//main add function
function addElement(type) {
    switch (type) {
        case '@text':
            addText();
            break;
        case '@clock':
            addClock();
            break;
        case '@date':
            addDate();
            break;
        case '@image':
            addImage();
            break;
        case '@video':
            addVideo();
            break;
        case '@weather':
            addWeather();
            break;
        case '@news':
            addNews();
            break;
        case '@rollingText':
            addRollingText();
            break;
        case '@app1':
            addApp1();
            break;
    }
}

//adding functions
function addText() {
    let textObj = getTextObj();
    textObj.id = Math.floor(Math.random() * 400);
    textObj.dfColor = $colorInput.val();
    textObj.dfBgColor = $bgColorInput.val();
    textObj.size = $sizeInput.val();
    if ($borderInput.prop("checked")) {
        textObj.border = "border";
    } else {
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
    } else {
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
    } else {
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
    let filename = $fileInput.val().substring($fileInput.val().lastIndexOf('\\') + 1, $fileInput.val().length);
    uploadImage(filename);
    imageObj.id = Math.floor(Math.random() * 400);
    let url = imageObj.url + filename;
    if ($borderInput.prop("checked")) {
        imageObj.border = "border";
    } else {
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
function addVideo() {
    let videoObj = getVideoObj();
    let filename = $fileInput.val().substring($fileInput.val().lastIndexOf('\\') + 1, $fileInput.val().length);
    videoObj(filename);
    videoObj.id = Math.floor(Math.random() * 400);
    let url = videoObj.url + filename;
    if ($borderInput.prop("checked")) {
        videoObj.border = "border";
    } else {
        videoObj.border = "";
    }
    let videoDOM = "<div class='resize-drag element row "
            + videoObj.border
            + "' "
            + " id='" + videoObj.id + "' "
            + " data-id='" + videoObj.id + "'"
            + " data-type='@image'"
            + " data-x='0'"
            + " data-y='0' "
            + " style='"
            + ";width:" + videoObj.dfWidth
            + ";height:" + videoObj.dfHeight
            + "'>"
            + "<img class='"
            + " p-0 m-0"
            + " w-100 "
            + " h-100 "
            + " image "
            + "' "
            + " src='" + url + "'"
            + " style='"
            + "font-size:" + videoObj.size + "px"
            + "'/>"
            + videoObj.dfScript
            + "</div>"
            ;
    $screen.append(videoDOM);
}
function addWeather() {
    console.log("ee");
    let weatherObj = getWeatherObj();
    weatherObj.id = Math.floor(Math.random() * 400);
    weatherObj.location = $locationInput.val();
    weatherObj.size = $sizeInput.val();
    if ($borderInput.prop("checked")) {
        weatherObj.border = "border";
    } else {
        weatherObj.border = "";
    }

    let weatherDOM = "<div class='resize-drag element row "
            + weatherObj.border
            + "' "
            + " id='" + weatherObj.id + "' "
            + " data-id='" + weatherObj.id + "'"
            + " data-type='@weather'"
            + " data-x='0'"
            + " data-y='0' "
            + " data-location='" + weatherObj.location + "'"
            + " style='"
            + "color:" + weatherObj.dfColor
            + ";background-color:" + weatherObj.dfBgColor
            + ";width:" + weatherObj.dfWidth
            + ";height:" + weatherObj.dfHeight
            + "'>"
            + "<h6 class='"
            + " p-1 "
            + " w-100 forcast "
            + $($vAlignInput.filter(":checked")[0]).val()
            + " "
            + $($hAlignInput.filter(":checked")[0]).val()
            + " "
            + $($fontWeightInput.filter(":checked")[0]).val()
            + " "
            + "' "
            + " style='"
            + "font-size:" + weatherObj.size + "px"
            + "'></h6>"
            + weatherObj.dfScript
            + "</div>"
            ;
    $screen.append(weatherDOM);
    getWeather(weatherObj.location);
}
function addNews() {

}
function addRollingText() {

}
function addApp1() {

}


// updating functions
function updateTime() {
    $('.clock').html(moment().format('HH:mm:ss'));
    $('.date').html(moment().format('DD-MM-YYYY'));
}
const capitalize = (s) => {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
function getWeather(location) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
        $(".forcast").html(Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + capitalize(data.weather[0].description));
    });
}
function uploadImage(filename) {
    let formData = new FormData(document.getElementById("modalForm"));
    let to = "./uploadImage";
    let par = {};
    par.file = $fileInput.val();
    par.name = filename;
    $.ajax({
        url: to,
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
            console.log("image updated");
        }
    });
}
function uploadVideo() {
    let formData = new FormData(document.getElementById("modalForm"));
    let to = "./uploadVideo";
    let par = {};
    par.file = $fileInput.val();
    par.name = filename;
    $.ajax({
        url: to,
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
            console.log("video updated");
        }
    });
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
    //local caxhe
    //localStorage.setItem("elements", JSON.stringify(toSave));
    //saving fto xml
    $.get("savescreen", {id: screenId, data: JSON.stringify(toSave)}, function success(data) {
        console.log("Saved to XML");
    });

    console.log("Saved " + toSave.length + " Elements");
}

setInterval(updateTime, 1000);