
// Signup Form Animation
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


// Login Form Animation
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


// ACTUAL CODE

$("#login-btn").on("click", async function() {
    const res = await $.ajax({
        url: "/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            username: $("#login-username").val(),
            password: $("#login-password").val()
        })

    });
    alert(`Username: ${$("#login-username").val()}\nPassword: ${$("#login-password").val()}`);
});


$("#register-btn").on("click", async function() {
    const res = await $.ajax({
        url: "/register",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            username: $("#register-username").val(),
            password: $("#register-password").val(),
            confirm: $("#confirm-pass").val()
        })

    });
    alert(`Username: ${$("#register-username").val()}\nPassword: ${$("#register-password").val()}\nConfirm Pass: ${$("#confirm-pass").val()}`);
});