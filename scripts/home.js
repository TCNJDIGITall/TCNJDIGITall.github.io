// this script file is present only on the home page of the application.

var header = document.getElementById("header");
var button = document.getElementById("button");
var mailingFormContainer = document.getElementById("mailingContainer")
var formContainer = document.getElementById("mailingFormContainer");
var formContainerBg = document.getElementById("mailingFormContainerBackground");
var successMessage = document.getElementById("successfulSubmitContainer")

formContainer.style.display = "none"
successMessage.style.display = "none"
let submitCount = 0

var authorContainer = document.getElementById("authorContainer");
var blamoContainer = document.getElementById("blamoIconContainer")
var blamo = document.getElementById("blamoIcon");

if(window.innerWidth >= 768){
    authorContainer.style.display = "none"
}


blamoContainer.addEventListener("mouseover", () => {
    blamo.style.filter = "invert(96%) sepia(2%) saturate(823%) hue-rotate(314deg) brightness(102%) contrast(102%)"
})

blamoContainer.addEventListener("mouseout", () => {
    blamo.style.filter = ""
})


if(!(/Mobi|Android/i.test(navigator.userAgent))){
    if(scale >= 1.25){
        formContainerBg.style.transform = "scale(2)"
    }
}

if(window.innerWidth >= 768){
    setTimeout(function () {
        authorContainer.style.display = "flex"
        authorContainer.style.animation = "slide-right 3.2s"
    }, 2000);
}

//function to open mailing form
async function openMailingForm(){
    if(formContainer.style.display == "none"){
        header.style.zIndex = 0;
        button.style.zIndex = 1;
        button.style.marginBottom = "20px";
        formContainer.style.zIndex = 1;
        formContainer.style.display = "block";
        formContainer.style.marginBottom = "20px";
        formContainerBg.style.display = "block"
        formContainerBg.style.animation = "fade-in 1s"
        mailingFormContainer.style.zIndex = "6"
        formContainerBg.style.zIndex = "5"
        mailingFormContainer.style.alignItems = "end"
        button.style.animation = "none";
        mailingFormContainer.style.animation = "slide-up 1s"
    } else if (formContainer.style.display != "none") {
        formContainer.style.zIndex = 0;
        button.style.marginBottom  = "100px";
        authorContainer.style.position = "absolute";
        formContainerBg.style.animation = "fade-out 0.5s"
        mailingFormContainer.style.alignItems = "center";
        mailingFormContainer.style.animation = "slide-down 0.5s"
        mailingFormContainer.style.zIndex = "1"
        formContainerBg.style.zIndex = "0"
        setTimeout(function () {
            header.style.zIndex = 10;
            button.style.zIndex = 0;
            button.style.marginBottom = "0px";
            formContainer.style.marginBottom = "0px";
            formContainerBg.style.display = "none";
            formContainer.style.display = "none";
            button.style.animation = "bounce 3s infinite";
        }, 495);
    }
}

// function to close mailing form
async function closeMailingForm(){
    formContainer.style.zIndex = 0;
    button.style.marginBottom  = "100px";
    formContainerBg.style.animation = "fade-out 0.5s"
    mailingFormContainer.style.alignItems = "center";
    mailingFormContainer.style.animation = "slide-down 0.5s"
    mailingFormContainer.style.zIndex = "1"
    formContainerBg.style.zIndex = "0"
    setTimeout(function () {
        header.style.zIndex = 10;
        button.style.zIndex = 0;
        button.style.marginBottom = "0px";
        formContainer.style.marginBottom = "0px";
        formContainerBg.style.display = "none";
        formContainer.style.display = "none";
        button.style.animation = "bounce 3s infinite";
    }, 495);
}

// event listener to help provide user feedback upon submission
addEventListener("submit", function() {
    if(window.innerWidth >= 768){
        if(successMessage.style.display == "none"){
            successMessage.style.display = "block"
            successMessage.style.animation = "slide-left 1.5s"
        }
        setTimeout(function(){
            location.reload();
        }, 3000)
    } else if (window.innerWidth < 768) {
        if(successMessage.style.display == "none"){
            successMessage.style.display = "block"
            successMessage.style.animation = "fade-in2 0.3s"
        }
        var scrolled;
        if(submitCount === 0){
            scrolled = (window.scrollY/2.5) + "px"
            ++submitCount;
        } else if (submitCount > 0 ){
            ++submitCount;
            scrolled = (window.scrollY) + "px"
        }
        console.log(submitCount)
        console.log(scrolled)
        successMessage.style.top = scrolled
        console.log("Submit hit")
        setTimeout(function(){
            location.reload();
        }, 3000)
    }
})

// event listener to help with resizing.
window.addEventListener("resize", () => {
    if (window.innerWidth < 768){
        closeMailingForm();
        authorContainer.style.position = "relative";
    }
    
})
