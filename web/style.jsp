<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Styling</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="./img/favicon-32x32.png">
        <link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="./css/body.css" rel="stylesheet" type="text/css"/>
        <script src="./js/lib/jquery.js"></script>
        <script src="./js/lib/bootstrap.bundle.min.js"></script>
        <script src="./js/lib/interact.min.js"></script>
        <script src="./js/style.js"></script>
        <script src="./js/interact.js"></script>
    </head>
    <body>
        <div class="container-fluid p-0 m-0">
            <div class="row w-100 bg-dark p-0 m-0 d-flex justify-content-between align-items-center" style="height: 7vh" id="menu">
                <div>
                    <a href="#" class="btn btn-secondary border mx-1 " id="text">
                        <img src="./img/icon/text.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border  mx-1">
                        <img src="./img/icon/clock.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1">
                        <img src="./img/icon/image.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1">
                        <img src="./img/icon/video.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1">
                        <img src="./img/icon/weather.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1">
                        <img src="./img/icon/news.png" alt=""/>
                    </a>
                </div>
                <div class="">
                    <a href="#" class="btn btn-secondary border  mx-1" id="emptyScreen">
                        <img src="./img/icon/empty.png" alt=""/>
                    </a>
                </div>
            </div>
            <div class="w-100 bg-secondary p-0 m-0" style="height: 93vh" id="screen">

            </div>
        </div>
    </body>
</html>
