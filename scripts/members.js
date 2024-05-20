// this script file is present only on the members page of the application.

var content = document.getElementById("content")

// condition that runs if user is not on a mobile device
if(!(/Mobi|Android/i.test(navigator.userAgent))){
    if(scale >= 1.5){
        content.style.scale = "1.075"
    } else if(scale >= 1.25 && scale < 1.5){
        content.style.scale = "1.025"
    }
}
