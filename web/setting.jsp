<%@page import="main.CONFIG"%>
<%@page import="main.controller.ScreenController"%>
<%@page import="main.modal.Screen"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>DD</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="./img/favicon-32x32.png">
        <link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="./js/lib/jquery.js"></script>
        <script src="./js/lib/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <div class=" w-100 p-0 m-0 row align-items-center justify-content-center bg-dark" style="min-height: 100vh">
            <div class="w-50  bg-secondary rounded text-white " id="screens" style="min-height: 50vh">
                <h1 class="h1 text-center pt-1 ">QDD</h1>
                <h1 class="h2 text-center pt-1 ">Choisir une affichage ou ajouter une nouvelle</h1>
                <div class="">
                <%
                    List<Screen> screens = new ScreenController().getAll(request);
                    for(Screen s:screens){%>
                        <div class="screenOption  d-flex py-3 bg-dark rounded m-1 align-items-center justify-content-between">
                            <div class="p-1"><a href="screen.jsp?id=<%=s.getId()%>" class=""><img src="img/icon/screen-32.png" alt=""/></a></div>
                            <div class=""><a href="screen.jsp?id=<%=s.getId()%>" class=""><span class="h3"><%=s.getName() %></span></a></div>
                            <div class="p-1 "><a href="style.jsp?id=<%=s.getId()%>" class="" target="_blank"><img src="img/icon/setting-32.png" alt=""/></a></div>
                        </div>
                    <%
                        }
                    %>
                    
                    
                    
                

                <div class="plusOption col-10  d-flex py-3 bg-dark rounded mx-auto my-1 align-items-center justify-content-between">
                    <div class="p-1"><a href="" class="" data-toggle="modal" data-target="#addScreenModal"  title="Ajouter Ã©cran."><img src="img/icon/addScreen-32.png" alt=""/></a></div>
                    <div><a href="" class="" data-toggle="modal" data-target="#addScreenModal"  title="Ajouter Ã©cran."><span class="h3">Ajouter écran</span></a></div>
                    <div class="p-1"><a href="" class=""> <img src="img/icon/addScreen-32.png" alt=""/></a></div>
                </div> 
                    </div>
            </div>
        </div>
        <div>
            <div class="modal fade"  id="addScreenModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" style="max-width: 600px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Ajouter une affichage:</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form  >
                                <div class="form-group" id="textGroup">
                                    <label for="textInput" class="col-form-label">Nom:</label>
                                    <input type="text" class="form-control border-dark" id="textInput" required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>
                            <button type="button" class="btn btn-success" id="mdlAddScreenBtn">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $("#mdlAddScreenBtn").click(function() {
                 //$("#addScreenModal").modal('toggle');
                 $.post("addScreen",{"name":$("#textInput").val().trim()}, function(statusText) {
                     console.log(statusText);
                     window.location= "<%= CONFIG.PAGE_HOME%>";
                 });
                 
                });
            });
        </script>
    </body>
</html>
