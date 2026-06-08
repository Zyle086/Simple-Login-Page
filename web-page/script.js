
$("#to-signup").on("click", function(e){
    $(".img-container").removeClass("right");
    $(".img-container").addClass("left");
    $(".login-container").addClass("hidden");
    $(".signup-container").removeClass("hidden");
}); 


$("#to-login").on("click", function(e){
    $(".img-container").removeClass("left");
    $(".img-container").addClass("right");
    $(".signup-container").addClass("hidden");
    $(".login-container").removeClass("hidden");
}); 