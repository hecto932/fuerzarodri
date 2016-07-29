$(function(){
    
    $("#formDonate").hide();
    $("#faqs").hide();

    $("#btnDonar").click(function(){
        console.log("Click!");
        $("#formDonate").toggle();
        if($("#btnDonar").html() == "Aceptar"){
            $("#btnDonar").html("¡Donar!");
            $("#faqs").toggle();
        }
    });

    $("#seeMore").click(function(){
        console.log("Click2!");
        $("#faqs").toggle();
    });

    $(".rbtnOption").on("click", function(){
        $("#btnDonar").html("Aceptar");
    });

    var ctx = document.getElementById("myChart");

    var data = {
        datasets: [{
            data: [
                80,
                20
            ],
            backgroundColor: [
                "#FF6384",
                "#f8ac59"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Recaudado",
            "Restante"
        ]
    };
    var options =  {
        responsive: true
    };

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

});