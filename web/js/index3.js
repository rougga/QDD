$(document).ready(function () {
    let id = localStorage.getItem("browserId");
    $("#browserId").val(id);
    if (id) {
        //rederect to scene webpage passing the paramer id
        console.log(id);
    } else {
        let randomId = Math.floor(Math.random() * 1000000);
        while (isDuplicate(randomId)) {
            randomId = Math.floor(Math.random() * 1000000);
        }
        localStorage.setItem("browserId", randomId);
        //saving the new browe*ser id to the database
        addNewBrowser(id);
        console.log("New browerId created: " + randomId);
    }

});


function isDuplicate(id) {
    let result = true;
    //ajax database test if the id does exist 
    return result;
}

function  addNewBrowser(id){
    //ajax to add new browser to database
}