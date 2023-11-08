var successMessage = document.getElementById("successfulSubmitContainer")
successMessage.style.display = "none"
let submitCount = 0
var scale = window.devicePixelRatio
let messageBox = document.getElementById("message")
let email = document.getElementById("emailLabel")
let sendButton = document.getElementById("sendButton")
let sendButtonContainer= document.getElementById("sendButtonContainer")
if(!(/Mobi|Android/i.test(navigator.userAgent))){
    if(scale > 1.5){
        console.log("hi");
        email.style.marginRight = "6px"
        messageBox.style.height = "150px"
        messageBox.style.maxHeight = "150px"
        sendButton.style.paddingTop = "5px"
        sendButton.style.paddingBottom = "5px"
        sendButtonContainer.style.marginBottom = "10px"
        messageBox.style.fontSize = "20px"
    }
}


addEventListener("submit", function() {
    if(window.innerWidth >= 768){
        if(successMessage.style.display == "none"){
            successMessage.style.display = "block"
            successMessage.style.animation = "slide-right 1.5s"
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