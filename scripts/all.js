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
    windowWidth = window.innerWidth;
    if (windowWidth > 768){
        links.style.display = "none";
    }
})