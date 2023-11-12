var container = document.getElementById("galleryContainer")
var headingContainer = document.getElementById("headingContainer")
var iframe = document.getElementById("iframe")

console.log(container.offsetWidth, "hi")
headingContainer.style.width = container.offsetWidth + "px";
iframe.style.marginTop = (headingContainer.offsetHeight - 50) + "px";

window.addEventListener("resize", () => {
    headingContainer.style.width = container.offsetWidth + "px";
})
