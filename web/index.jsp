<%@page import="main.CONFIG"%>
<%@page import="main.controller.ScreenController"%>
<%@page import="main.modal.Screen"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8">
        <title>QDD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="./js/lib/jquery.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        <link href="css/index.css" rel="stylesheet">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center m-auto">
                    <form>
                        <div class="mb-3">
                            <img src="./img/logo.png" class="img-fluid " alt="...">
                        </div>
                        <div class="mb-3">
                            <label for="browserId" class="form-label text-white w-100 text-center fw-bolder">ID NAVIGATEUR</label>
                            <input type="text" class="form-control border-25px text-center fw-bolder" id="browserId" >
                            <div id="emailHelp" class="form-text text-white ps-3">automatique.</div>
                        </div>

                        <div class="mb-3 d-flex justify-content-center">
                            <button class="btn btn-light border-25px fw-bolder" type="submit" disabled>
                                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span class="" role="status">CONNECTER</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
        <script src="./js/index3.js"></script>
    </body>

</html>