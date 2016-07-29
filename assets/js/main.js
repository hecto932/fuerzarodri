$(function(){
    $("#formDonate").hide();
    $("#btnDonar").click(function(){
        console.log("Click!");
        $("#formDonate").toggle();
        if($("#btnDonar").html() == "Aceptar"){
            $("#btnDonar").html("¡Donar!");
        }
    });

    $(".rbtnOption").on("click", function(){
        $("#btnDonar").html("Aceptar");
    });
});