function uploadImage(filename) {
    let formData = new FormData(document.getElementById("modalForm"));
    let to = "./UploadImage";
    let par = {};
    par.file = $fileInput.val();
    par.name = filename;
    $.ajax({
        url: to,
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
            console.log("image updated");
        }
    });
}
function uploadVideo(filename) {
    let formData = new FormData(document.getElementById("modalForm"));
    let to = "./UploadVideo";
    let par = {};
    par.file = $fileInput.val();
    par.name = filename;
    $.ajax({
        url: to,
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
            console.log("video updated");
        }
    });
}