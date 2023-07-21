<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Affichage</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="./img/favicon-32x32.png">
        <link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="./js/lib/jquery.js"></script>
        <script src="./js/lib/moment.min.js"></script>
        <script src="./js/lib/bootstrap.bundle.min.js"></script>
        <script src="./js/updateFunctions.js"></script>
        <script src="./js/index.js"></script>
        <script src="./js/loadScreen.js"></script>
    </head>
    <body>
        <div class="container-fluid p-0 m-0">
            <div class="w-100 vh-100 p-0 m-0 bg-dark" id="screen">

            </div>
        </div>
    </body>
    <script>
        let id = "<%= request.getParameter("id")%>";
        $(document).ready(function () {
            $.get("loadscreen", {id: id}, function success(data, textStatus) {
                loadScreen(data);
                
            let marquee = $('.marquee');
            let bb= 0;
            marquee.each(function () {
                console.log("marquee.each");
                let mar = $(this), indent = mar.width();
                mar.marquee = function () {
                    indent--;
                    mar.css('text-indent', indent);
                    if (indent < -1 * mar.text().length*Math.floor(mar.css("font-size").replace("px",""))) {
                        indent = mar.width();
                    }

                };
                setInterval(function () {
                     mar.marquee();
                    console.log("marquee");
                }, 1000 / 60);
            });
            });

        });
    </script>
</html>