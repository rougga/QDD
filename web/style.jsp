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
                                    <div class="form-group" id="colorGroup">
                                        <label for="colorInput" class="col-form-label">Couleur:</label>
                                        <input type="color" class="form-control" id="colorInput" value="#ffffff"/>
                                    </div>
                                    <div class="form-group" id="bgColorGroup">
                                        <label for="bgColorInput" class="col-form-label">Arrière plan:</label>
                                        <input type="color" class="form-control" id="bgColorInput"/>
                                    </div>
                                    <div class="form-group" id="hAlignGroup">
                                        <h6 class="col-form-label">Alignement horizontal:</h6>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA1" name="hAlignInput" class="custom-control-input" value="left" checked="checked">
                                            <label class="custom-control-label" for="hA1">Gauche</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA2" name="hAlignInput" class="custom-control-input" value="center">
                                            <label class="custom-control-label" for="hA2">Centre</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA3" name="hAlignInput" class="custom-control-input" value="right">
                                            <label class="custom-control-label" for="hA3">Droit</label>
                                        </div>
                                    </div>
                                    <div class="form-group" id="vAlignGroup">
                                        <h6 class="col-form-label">Alignement vertical:</h6>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="vA1" name="vAlignInput" class="custom-control-input" value="align-self-start" checked="checked">
                                            <label class="custom-control-label" for="vA1">Haut</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="vA2" name="vAlignInput" class="custom-control-input" value="align-self-center">
                                            <label class="custom-control-label" for="vA2">Milieu</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="vA3" name="vAlignInput" class="custom-control-input" value="align-self-end">
                                            <label class="custom-control-label" for="vA3">Bas</label>
                                        </div>
                                    </div>
                                    <div class="form-group" id="borderGroup">
                                        <h6 class="col-form-label">Bordure:</h6>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input disabled" id="borderInput">
                                            <label class="custom-control-label" for="borderInput"> - La bordure</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal" id="closeModalBtn"></button>
                                <button type="button" class="btn btn-success" id="addElement"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
