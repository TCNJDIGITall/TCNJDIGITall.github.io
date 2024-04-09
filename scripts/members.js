var content = document.getElementById("content")

if(!(/Mobi|Android/i.test(navigator.userAgent))){
    if(scale >= 1.5){
        content.style.scale = "1.075"
    } else if(scale >= 1.25 && scale < 1.5){
        content.style.scale = "1.025"
    }
}