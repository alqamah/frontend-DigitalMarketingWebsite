
var hbtn = document.getElementById("hbgr-btn");

window.console.log(hbtn);

hbtn.addEventListener('click', function () {
    togglemenuview();

})

var vflag = false;

function togglemenuview() {
    var menu = document.getElementById("nav");
    var htxt = document.getElementById("main-text");
    if (vflag == false) {
        menu.style.right = '0px';
    }
    else {
        menu.style.right = '-100%';
    }
    vflag = !vflag;
}