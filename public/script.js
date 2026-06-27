
$("#to-register").on("click", function(){
    $(".img-container").removeClass("right");
    $(".img-container").addClass("left");
    $(".register-form").removeClass("hidden");
    $(".login-form").addClass("disappearLeft");
    setTimeout(() => {
        $(".login-form").addClass("hidden");
        $(".login-form").removeClass("disappearLeft");
    }, 500);
});



$("#to-login").on("click", function(){
    $(".img-container").removeClass("left");
    $(".img-container").addClass("right");
    $(".login-form").removeClass("hidden");
    $(".register-form").addClass("disappearRight");
    setTimeout(() => { 
        $(".register-form").addClass("hidden");
        $(".register-form").removeClass("disappearRight");
        
    }, 500);

});