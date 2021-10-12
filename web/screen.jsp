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
        let id= "<%= request.getAttribute("screenId")%>";
        
    </script>
</html>