window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 115 || document.documentElement.scrollTop > 115) {
        document.getElementById("header").style.height = "120px";
        document.getElementById("header-img").style.transform = "none";
    } else {
        document.getElementById("header").style.height = "190px";
        document.getElementById("header-img").style.transform = "scale(1.1) translate(25px, 1px)";
    }
}
