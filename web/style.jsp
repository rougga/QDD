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
        <script src="./js/init.js"></script>
        <script src="./js/updateFunctions.js"></script>
        <script src="./js/uploadFiles.js"></script>
        <script src="./js/style.js"></script>
        <script src="./js/interact.js"></script>
        <script src="./js/addElements.js"></script>
        <script src="./js/loadEditableScreen.js"></script>
    </head>
    <body>
        <div class="container-fluid p-0 m-0 " style="overflow: hidden">
            <div class="p-0 m-0 row justify-content-center align-items-center position-absolute " style="left: 44%">
                <a href="#" class="py-3 px-5 bg-info" style="border-radius: 0 0 50% 50%; opacity: 0.6;"  data-toggle="modal" data-target="#addElementModal" data-type="@text" title="Ajouter Text">
                    <img src="img/icon/list-32.png" />
                </a>
            </div>
            <div class="w-100 bg-secondary p-0 m-0 vh-100" style="" id="screen">

            </div>
            <div>
                <div class="modal fade"  id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document" style="max-width: 600px">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabel">---</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="modalForm" >
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
                                    <div class="form-group" id="sizeGroup">
                                        <label for="sizeInput" class="col-form-label">Taille: <span class="badge badge-pill badge-primary" id="sizeInfo">16</span></label>
                                        <input type="range" class="custom-range" min="1" max="200" step="0.5" id="sizeInput" value="16">
                                    </div>
                                    <div class="form-group" id="fontWeightGroup">
                                        <h6 class="col-form-label font-weight-normal">Alignement horizontal:</h6>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="fW1" name="fontWeightInput" class="custom-control-input" value="font-weight-lighter" checked="checked">
                                            <label class="custom-control-label" for="fW1">Plus léger</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="fW2" name="fontWeightInput" class="custom-control-input" value="font-weight-light">
                                            <label class="custom-control-label" for="fW2">Léger</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="fW3" name="fontWeightInput" class="custom-control-input" value="font-weight-normal">
                                            <label class="custom-control-label" for="fW3">Normal</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="fW4" name="fontWeightInput" class="custom-control-input" value="font-weight-bold">
                                            <label class="custom-control-label" for="fW4">Gras</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="fW5" name="fontWeightInput" class="custom-control-input" value="font-weight-bolder">
                                            <label class="custom-control-label" for="fW5">Plus gras</label>
                                        </div>
                                    </div>
                                    <div class="form-group" id="hAlignGroup">
                                        <h6 class="col-form-label font-weight-normal">Alignement horizontal:</h6>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA1" name="hAlignInput" class="custom-control-input" value="text-left" checked="checked">
                                            <label class="custom-control-label" for="hA1">Gauche</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA2" name="hAlignInput" class="custom-control-input" value="text-center">
                                            <label class="custom-control-label" for="hA2">Centre</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="hA3" name="hAlignInput" class="custom-control-input" value="text-right">
                                            <label class="custom-control-label" for="hA3">Droit</label>
                                        </div>
                                    </div>
                                    <div class="form-group" id="vAlignGroup">
                                        <h6 class="col-form-label font-weight-normal">Alignement vertical:</h6>
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
                                    <div class="form-group" id="fileGroup">
                                        <h6 class="col-form-label font-weight-normal">Fichier:</h6>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="fileInput" accept="image/*" name="file">
                                            <label class="custom-file-label" for="fileInput" id="fileLabel">Choose file</label>
                                        </div>
                                    </div>
                                    <div class="form-group" id="locationGroup">
                                        <label for="ville">Ville:</label>
                                        <select class="form-control" id="locationInput">
                                            <option selected disabled value="0">Sélectionnez une ville</option>
                                            <option value="Casablanca,Morocco">Casablanca</option>
                                            <option value="Agadir,Morocco">Agadir</option>
                                            <option value="Al Hoceima,Morocco">Al Hoceima</option>
                                            <option value="Béni Mellal,Morocco">Béni Mellal</option>
                                            <option value="El Jadida,Morocco">El Jadida</option>
                                            <option value="Errachidia,Morocco">Errachidia</option>
                                            <option value="Fès,Morocco">Fès</option>
                                            <option value="Kénitra,Morocco">Kénitra</option>
                                            <option value="Khénifra,Morocco">Khénifra</option>
                                            <option value="Khouribga,Morocco">Khouribga</option>
                                            <option value="Larache,Morocco">Larache</option>
                                            <option value="Marrakech,Morocco">Marrakech</option>
                                            <option value="Meknès,Morocco">Meknès</option>
                                            <option value="Nador,Morocco">Nador</option>
                                            <option value="Ouarzazate,Morocco">Ouarzazate</option>
                                            <option value="Oujda,Morocco">Oujda</option>
                                            <option value="Rabat,Morocco">Rabat</option>
                                            <option value="Safi,Morocco">Safi</option>
                                            <option value="Settat,Morocco">Settat</option>
                                            <option value="Salé,Morocco">Salé</option>
                                            <option value="Tanger,Morocco">Tanger</option>
                                            <option value="Taza,Morocco">Taza</option>
                                            <option value="Tétouan,Morocco">Tétouan</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group" id="borderGroup">
                                        <h6 class="col-form-label font-weight-normal">Bordure:</h6>
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input disabled" id="borderInput" value="border">
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

                <div class="modal fade"  id="addElementModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document" style="max-width: 600px">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-center">Ajouter une element</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row p-2">
                                    <a href="#" class="btn btn-success border  col-6 py-3" data-dismiss="modal"  id="save">
                                        <img src="./img/icon/save.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-danger border  col-6 py-3" data-dismiss="modal" id="emptyScreen">
                                        <img src="./img/icon/empty.png" alt=""/>
                                    </a>

                                    <h1 class="w-100 text-center">------------------</h1>

                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="text" data-dismiss="modal"  data-toggle="modal" data-target="#modal" data-type="@text" title="Ajouter Text">
                                        <img src="./img/icon/text.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="clock"  data-dismiss="modal"  data-toggle="modal" data-target="#modal" data-type="@clock">
                                        <img src="./img/icon/clock.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="date" data-dismiss="modal" data-toggle="modal" data-target="#modal" data-type="@date">
                                        <img src="./img/icon/calendar.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="image" data-dismiss="modal" data-toggle="modal" data-target="#modal" data-type="@image">
                                        <img src="./img/icon/image.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="video" data-dismiss="modal" data-toggle="modal" data-target="#modal" data-type="@video">
                                        <img src="./img/icon/video.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="weather" data-dismiss="modal" data-toggle="modal" data-target="#modal" data-type="@weather">
                                        <img src="./img/icon/weather.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="rollingText" data-dismiss="modal"  data-toggle="modal" data-target="#modal" data-type="@rollingText" title="Ajouter Text Roullant">
                                        <img src="./img/icon/text.png" alt=""/>
                                    </a>
                                    <a href="#" class="btn btn-secondary border col-6 mb-2 py-4 elementBtn" id="news" data-dismiss="modal" data-toggle="modal" data-target="#modal" data-type="@news">
                                        <img src="./img/icon/news.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(".elementBtn").click(function () {
                $("#addElementModal").modal('toggle');
            });
            let id = screenId = "<%= request.getParameter("id")%>";
            $(document).ready(function () {
                $.get("loadscreen", {id: id}, function success(data, textStatus) {
                    loadEditableScreen(data);
                });
            });
        </script>
    </body>
</html>
