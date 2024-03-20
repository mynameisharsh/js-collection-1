document.querySelector("#grandparent").addEventListener("click", function () {
    alert("Grand Parent called")
}, true);

document.querySelector("#parent").addEventListener("click", function () {
    alert("Parent called")
}, true);

document.querySelector("#child").addEventListener("click", function () {
    alert("Child called")
}, false);


/*

Event Bubbling means flow to the up side.
Event Capturing means flow to the down side.
Event cycle is rotating from top to down and then down to top


By Default Nature is Event Bubbling

*/