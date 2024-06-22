var DarkTag = document.getElementById("Dark_id");
var LightTag = document.getElementById("Light_id")
var BodyTag = document.getElementById("body_id");

DarkTag.addEventListener("click", function () {
    BodyTag.className = "Dark"
})

LightTag.addEventListener("click", function () {
    BodyTag.className = "Light"
})