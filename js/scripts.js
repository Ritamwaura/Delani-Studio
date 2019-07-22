$(function(){
    $('#info1').hide();
    $('#info2').hide();
    $('#info3').hide();

    $("#designimage").click(function(){
        $('#designimage').slideUp();
        $("#info1").show(500);
    });
    $("#info1").click(function(){
        $("#designimage").slideDown();
        $("#info1").hide();
    });



    $("#developmentimage").click(function(){
        $('#developmentimage').slideUp();
        $("#info2").show(500);
    });
    $("#info2").click(function(){
        $("#developmentimage").slideDown();
        $("#info2").hide();
    });



    $("#productimage").click(function(){
        $('#productimage').slideUp();
        $("#info3").show(500);
    });
    $("#info3").click(function(){
        $("#productimage").slideDown();
        $("#info3").hide();
    });
    $("#image1").mouseover(function(){
        $("#overlay").show();
    }).mouseout(function(){
        $("#overlay").hide();
    });
    $("#image2").mouseover(function(){
        $("#overlay2").show(Delani);
    }).mouseout(function(){
        $("#overlay2").hide();
    });
    $("#image3").mouseover(function(){
        $("#overlay3").show(Delani);
    }).mouseout(function(){
        $("#overlay3").hide();
    });
    $("#image4").mouseover(function(){
        $("#overlay4").show(Delani);
    }).mouseout(function(){
        $("#overlay4").hide();
    });
    $("#image5").mouseover(function(){
        $("#overlay5").show();
    }).mouseout(function(){
        $("#overlay5").hide();
    });
    $("#image6").mouseover(function(){
        $("#overlay6").show();
    }).mouseout(function(){
        $("#overlay6").hide();
    });
    $("#image7").mouseover(function(){
        $("#overlay7").show();
    }).mouseout(function(){
        $("#overlay7").hide();
        $('.portimg').hover(function(){
            $('.porttext',this).slideToggle('slow');
        }, function(){
            $('.porttext',this).slideToggle('slow');
        });portimg {
            float: right;
            position: relative;
            margin: 5px;
            /*color: #333;*/
        }
    .portimg .porttext {
            display: none;
            opacity: 1;
            background-color:rgba(255, 255, 255, 0.6);
            width: auto;
            position: absolute;
            bottom: 0;
            color: deepskyblue;
            text-align: center;
            font-weight: bold;
            font-size: 30px;
            padding: 30px;
            height: 100%;
        }
    });
    $("#image8").mouseover(function(){
        $("#overlay8").show();
    }).mouseout(function(){
        $("#overlay8").hide();
    });
    $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#message").val();
        if ($("input#name").val() && $("input#email").val() && $("input#message").val()!= "" ){
            alert (name + ", We have received your message. Thank you for contacting us.");
        }
        else {
            alert("Fill in all your details please!")
        }
        event.preventDefault();
    });

});