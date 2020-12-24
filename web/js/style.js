let $screen;
let $menu;
let $text;
let $emptyScreen;
let elements = {};

let init = function () {
    $screen = $("#screen");
    $menu = $("#menu");
    $text = $("#text");
    $emptyScreen = $("#emptyScreen");
};

$(document).ready(function () {
    init();


    $text.on('click', function () {
        let textObj = {
            id: "id1",
            df_width: "300px",
            df_height: "100px",
            df_color: "white",
            df_bg_color: "green",
            df_html: "<p class='p-1'>Text Demo</p>",
            df_script: "<script></script>"
        };
        let textDOM = "<div class='resize-drag resizable' data-id='" + textObj.id + "' style='color:" + textObj.df_color + ";background-color:" + textObj.df_bg_color + ";width:" + textObj.df_width + ";height:" + textObj.df_height + "'>"
                + textObj.df_html
                + textObj.df_script
                + "</div>"
                ;
        $screen.append(textDOM);

    });
    
    
    $emptyScreen.click(function () {
       $screen.empty();
    });
});