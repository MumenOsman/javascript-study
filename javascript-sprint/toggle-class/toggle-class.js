
function onBoldClick() {
    document.querySelector("p").classList.toggle("bold");
}

function onItalicClick() {
    document.querySelector("p").classList.toggle("italic");
}

function onUnderlineClick() {
    document.querySelector("p").classList.toggle("underline");
}

function onHighlightClick() {
    document.getElementById("content").classList.toggle("highlight");
}

function init() {
    document.body.appendChild(document.createElement("div")).id = "content";
    document.getElementById("content").appendChild(document.createElement("p")).textContent = "code";
    document.body.appendChild(document.createElement("div")).classList.add("controls");
    document.querySelector(".controls").appendChild(document.createElement("button")).id = "bold";
    document.getElementById("bold").textContent = "B";
    document.querySelector(".controls").appendChild(document.createElement("button")).id = "italic";
    document.getElementById("italic").textContent = "I";
    document.querySelector(".controls").appendChild(document.createElement("button")).id = "underline";
    document.getElementById("underline").textContent = "U";
    document.querySelector(".controls").appendChild(document.createElement("button")).id = "highlight";
    document.getElementById("highlight").textContent = "H";

    document.getElementById("bold").addEventListener("click", onBoldClick);
    document.getElementById("italic").addEventListener("click", onItalicClick);
    document.getElementById("underline").addEventListener("click", onUnderlineClick);
    document.getElementById("highlight").addEventListener("click", onHighlightClick);
}


init();