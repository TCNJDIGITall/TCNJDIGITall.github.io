var successMessage = document.getElementById("successfulSubmitContainer")
successMessage.style.display = "none"
let submitCount = 0

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