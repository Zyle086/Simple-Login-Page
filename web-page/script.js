const DELAY = ms => new Promise(resolve => setTimeout(resolve, ms));

// Signup Form
$("#to-signup").on("click", function(e){
    $(".img-container").removeClass("right");
    $(".img-container").addClass("left");
    $(".login-container").addClass("disappearLeft");
    $(".signup-container").removeClass("hidden");
    setTimeout(() => {
        $(".login-container").addClass("hidden");
        $(".login-container").removeClass("disappearLeft");
    }, 500);
}); 


// Login Form
$("#to-login").on("click", function(e){
    $(".img-container").removeClass("left");
    $(".img-container").addClass("right");
    $(".signup-container").addClass("disappearRight");
    $(".login-container").removeClass("hidden");
    setTimeout(() => {
        $(".signup-container").addClass("hidden");
        $(".signup-container").removeClass("disappearRight");
    }, 500);
}); 