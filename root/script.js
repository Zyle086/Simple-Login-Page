
$("#to-register").on("click", () => {
    $(".img-container").removeClass("right");
    $(".img-container").addClass("left");
    $(".register-form").removeClass("hidden");
    $(".login-form").addClass("disappearLeft");
    setTimeout(() => {
        $(".login-form").addClass("hidden");
        $(".login-form").removeClass("disappearLeft");
    }, 500);
});



$("#to-login").on("click", () => {
    $(".img-container").removeClass("left");
    $(".img-container").addClass("right");
    $(".login-form").removeClass("hidden");
    $(".register-form").addClass("disappearRight");
    setTimeout(() => { 
        $(".register-form").addClass("hidden");
        $(".register-form").removeClass("disappearRight");
        
    }, 500);

});


// ACTUAL CODE

/**
 * TODO: 
 * * Manage Password Requirements (length, symbols, etc)
 * 
 * ! HANDLE ERRORS ( HIGH PRIO )
 * * Missing Required Fields ( Client Side / Frontend / ) 
 * * Username/ Email Not Found (Client side /  Backend ) 
 * * Incorrect Password (CLient Side / Backend )
 * 
 */


$(".password-container img").on("click", function(){
    let id = $(this).attr("id");
    toggleEye(id);

});

function toggleEye(id){
    if($("#"+id).hasClass("active")){
        $("#"+id).attr("src", "assets/svg/eye-closed.png");
        $("#"+id).removeClass("active");
        $("#"+id+"-password").attr("type", "password");
    }
    else {
        $("#"+id).attr("src", "assets/svg/eye.png");
        $("#"+id).addClass("active");
        $("#"+id+"-password").attr("type", "text");
    }
}


$("button.submit").on("click", async function() {
    let buttonId = $(this).attr("id");
    let res;

    if(buttonId === "login-btn") {  
        res = await $.ajax({
            type: "POST",
            url: "/login",
            contentType: "application/json",
            data: JSON.stringify({
                username: $("#login-username").val(),
                password: $("#login-password").val()
            }),
            
        });
        alert(`Username: ${$("#login-username").val()}\nPassword: ${$("#login-password").val()}\n\nRESPONSE: ${res}`);
        
    } else if (buttonId === "register-btn") {
        res = await $.ajax({
            type: "POST",
            url: "/register",
            contentType: "application/json",
            data: JSON.stringify({
                username: $("#register-username").val(),
                password: $("#register-password").val(),
                confirm: $("#confirm-password").val()
            }),
        });
        alert(`Username: ${$("#register-username").val()}\nPassword: ${$("#register-password").val()}\nConfirm Pass: ${$("#confirm-password").val()}\n\nRESPONSE: ${res}`);
        
    }
});
