function openMailingForm(){
    var header = document.getElementById("header");
    var button = document.getElementById("button");
    var formContainer = document.getElementById("mailingFormContainer");
    var formContainerBg = document.getElementById("mailingFormContainerBackground");
    if(formContainer.style.display === "none"){
        header.style.zIndex = 0;
        button.style.zIndex = 1;
        formContainer.style.zIndex = 1;
        formContainer.style.display = "block";
        formContainerBg.style.display = "block"
    } else {
        header.style.zIndex = 10;
        button.style.zIndex = 0;
        formContainer.style.zIndex = 0;
        formContainer.style.display = "none";
        formContainerBg.style.display = "none"
    }
}

function closeMailingForm(){
    var button = document.getElementById("button");
    var formContainer = document.getElementById("mailingFormContainer");
    var formContainerBg = document.getElementById("mailingFormContainerBackground");
    button.style.zIndex = 0;
    formContainer.style.zIndex = 0;
    formContainer.style.display = "none";
    formContainerBg.style.display = "none"
}