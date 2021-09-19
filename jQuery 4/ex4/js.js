$(document).ready(function(){
    $("img").click(function(){
        $("#selection").append(this);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("h1").text("select your favourite colour among the colours");
        $("#sel").text("your favourite colours in order");
    });
});

