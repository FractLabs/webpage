const about = document.getElementById("about");

about.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 1000, behavior: "smooth"});
});