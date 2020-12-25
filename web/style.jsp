<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Styling</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="./img/favicon-32x32.png">
        <link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="./css/body.css" rel="stylesheet" type="text/css"/>
        <script src="./js/lib/jquery.js"></script>
        <script src="./js/lib/moment.min.js"></script>
        <script src="./js/lib/bootstrap.bundle.min.js"></script>
        <script src="./js/lib/interact.min.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.emitter.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.fallbacks.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.messagestore.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.parser.js"></script>
        <script src="./js/lib/i18n/jquery.i18n.emitter.bidi.js"></script>
        <script src="./js/style.js"></script>
        <script src="./js/interact.js"></script>
        <script src="./js/elements.js"></script>
    </head>
    <body>
        <div class="container-fluid p-0 m-0">
            <div class="row w-100 bg-dark p-0 m-0 d-flex justify-content-between align-items-center" style="height: 7vh" id="menu">
                <div>
                    <a href="#" class="btn btn-secondary border ml-4 mr-1 " id="text" data-toggle="modal" data-target="#modal" data-type="@text">
                        <img src="./img/icon/text.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border  mx-1" id="clock" data-toggle="modal" data-target="#modal" data-type="@clock">
                        <img src="./img/icon/clock.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1" id="image" data-toggle="modal" data-target="#modal" data-type="@image">
                        <img src="./img/icon/image.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1" id="video" data-toggle="modal" data-target="#modal" data-type="@video">
                        <img src="./img/icon/video.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1" id="weather" data-toggle="modal" data-target="#modal" data-type="@weather">
                        <img src="./img/icon/weather.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border mx-1" id="news" data-toggle="modal" data-target="#modal" data-type="@news">
                        <img src="./img/icon/news.png" alt=""/>
                    </a>
                </div>
                <div class="">
                    <a href="#" class="btn btn-secondary border  mx-1" id="save">
                        <img src="./img/icon/save.png" alt=""/>
                    </a>
                    <a href="#" class="btn btn-secondary border  ml-1 mr-4" id="emptyScreen">
                        <img src="./img/icon/empty.png" alt=""/>
                    </a>
                </div>
            </div>
            <div class="w-100 bg-secondary p-0 m-0" style="height: 93vh" id="screen">

            </div>
            <div>
                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabel">New message</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group" id="textGroup">
                                        <label for="textInput" class="col-form-label">Texte:</label>
                                        <input type="text" class="form-control" id="textInput">
                                    </div>
                                    <div class="form-group" id="bgColorGroup">
                                        <label for="bgColorInput" class="col-form-label">Arrière plan:</label>
                                        <input type="color" class="form-control" id="bgColorInput"/>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
