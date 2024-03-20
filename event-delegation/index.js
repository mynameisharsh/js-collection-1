/*
Work because of event bubbling
it is basically technique so that event handleing becomes easy to manage.


PROS:
- Performance bottle neck removed
- Save memory
- Less code
- Event handling becomes easy
- Easy to manage if elements are loaded dynamically.

CONS:
- Not all event bubble up

*/


document.querySelector("#parent").addEventListener("click", function (e){
    alert(e.target.id)
});

document.querySelector("#form").addEventListener("keyup", function (e){
    if(e.target.dataset.uppercase != undefined)
        e.target.value = e.target.value.toUpperCase();
});