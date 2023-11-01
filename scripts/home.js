var header = document.getElementById("header");
var button = document.getElementById("button");
var mailingFormContainer = document.getElementById("mailingContainer")
var formContainer = document.getElementById("mailingFormContainer");
var formContainerBg = document.getElementById("mailingFormContainerBackground");


function openMailingForm(){
    if(formContainer.style.display === "none"){
        header.style.zIndex = 0;
        button.style.zIndex = 1;
        button.style.marginBottom = "10px";
        formContainer.style.zIndex = 1;
        formContainer.style.display = "block";
        formContainer.style.marginBottom = "10px";
        formContainerBg.style.display = "block"
        formContainerBg.style.animation = "fade-in 1s"
        mailingFormContainer.style.alignItems = "end"
        button.style.animation = "none";
        mailingFormContainer.style.animation = "slide 1s"
    } else {
        header.style.zIndex = 10;
        button.style.zIndex = 0;
        button.style.marginBottom = "0px";
        formContainer.style.zIndex = 0;
        formContainer.style.display = "none";
        formContainerBg.style.display = "none"
        formContainerBg.style.animation = "none"
        mailingFormContainer.style.alignItems = "center"
        formContainer.style.marginBottom = "0px";
        button.style.animation = "bounce 5s infinite";
        mailingFormContainer.style.animation = "none"
    }
}

function closeMailingForm(){
    button.style.zIndex = 0;
    button.style.marginBottom = "0px";
    formContainer.style.zIndex = 0;
    formContainer.style.display = "none";
    formContainerBg.style.display = "none";
    formContainerBg.style.animation = "none"
    mailingFormContainer.style.alignItems = "center";
    formContainer.style.marginBottom = "0px";
    button.style.animation = "bounce 5s infinite";
    mailingFormContainer.style.animation = "none"
}