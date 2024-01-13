var scale = window.devicePixelRatio
var content = document.getElementById("content")


if(!(/Mobi|Android/i.test(navigator.userAgent))){
    if(scale >= 1.5){
        const textElements = document.querySelectorAll('*:not(script):not(style):not([class^="fa-"])');
        textElements.forEach((element) => {
            const computedStyle = getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            if(currentFontSize < 30){
                const newFontSize = currentFontSize * .9;
                element.style.fontSize = newFontSize + 'px';
            } else if (currentFontSize >= 30 && currentFontSize < 48){
                const newFontSize = currentFontSize * .7;
                element.style.fontSize = newFontSize + 'px';
            } else if(currentFontSize >= 48 && currentFontSize < 120){
                const newFontSize = currentFontSize * .6;
                element.style.fontSize = newFontSize + 'px';
            }
        });
        content.style.transform = 'scale(.9)'
    } else if(scale >= 1.25 && scale < 1.5){
        const textElements = document.querySelectorAll('*:not(script):not(style):not([class^="fa-"])');
        textElements.forEach((element) => {
            const computedStyle = getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            if(currentFontSize < 30){
                const newFontSize = currentFontSize * 1;
                element.style.fontSize = newFontSize + 'px';
            } else if (currentFontSize >= 30 && currentFontSize < 48){
                const newFontSize = currentFontSize * .8;
                element.style.fontSize = newFontSize + 'px';
            } else if(currentFontSize >= 48 && currentFontSize < 120){
                const newFontSize = currentFontSize * .7;
                element.style.fontSize = newFontSize + 'px';
            }
        });
        content.style.transform = 'scale(.95)'
    }
}

const navHelper = document.getElementById("navHelper")
const navbar = document.getElementById("navbar")
const windowWidth = window.innerWidth;
if (windowWidth > 768){
    if (navbar.offsetWidth == windowWidth) {
        navHelper.style.alignItems = "flex-start";
    } else {
        navHelper.style.alignItems = "flex-end";
    }
}

function myMenu(){
    const nav = document.getElementById("navbar")
    const links = document.getElementById("linkContainer2")
    const hamburger = document.getElementById("hamburgerMenu")
    if(links.style.display === "none"){
        nav.style.borderBottom = "solid 3px #164B7D";
        links.style.display = "flex"
        links.style.zIndex = 2
        links.style.flexDirection = "column"
    } else {
        nav.style.borderBottom = "none";
        nav.style.flexDirection = "row"
        links.style.zIndex = 0
        links.style.display = "none"
        links.style.flexDirection = "row"
    }

}

window.addEventListener("resize", () => {
    const links = document.getElementById("linkContainer2")
    const navHelper = document.getElementById("navHelper")
    const navbar = document.getElementById("navbar")
    const windowWidth = window.innerWidth;
    if (windowWidth > 768){
        links.style.display = "none";
        if (navbar.offsetWidth == windowWidth) {
            navHelper.style.alignItems = "flex-start";
        } else {
            navHelper.style.alignItems = "flex-end";
        }
    }

    
})