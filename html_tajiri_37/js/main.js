// jsを記述する際はここに記載していく
$(function(){
// LOGIN
    $("#login-show").click(function(){
        $("#login-modal").fadeIn();
    });
    $(".close-modal").click(function(){
        $("#login-modal").fadeOut();
    });

// CONTACT-FORM
    $("#contact-show").click(function(){
        $("#contact-modal").fadeIn();
    });
    $(".close-modal").click(function(){
        $("#contact-modal").fadeOut();
    });

// FAQ
    $(".faq-list").click(function(){
        var $answer = $(this).find(".faq-answer");
        if($answer.hasClass("open")){
            $answer.removeClass("open");
            $answer.slideUp();
            $(this).find("span").text("+");
        }else{
            $answer.addClass("open");
            $answer.slideDown();
            $(this).find("span").text("－");   
        };
    });


});