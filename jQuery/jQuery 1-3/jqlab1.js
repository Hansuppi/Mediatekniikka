function HelloUser() {
    document.getElementById("demo").innerHTML = "Hello user!";
}

$(document).ready(function() {
    $("#4p").hover(function() {
        $(this).css("background-color", "gray");
    }, function() {
        $(this).css("background-color", "white");
    });
});





