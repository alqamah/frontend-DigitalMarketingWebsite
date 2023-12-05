//Code for Dark/Light mode 
var tbtn = document.getElementById("toggle-btn");

var mode = true;

tbtn.addEventListener('click', function () {
    render();
})

function render() {
    var newElement = document.createElement('link');
    newElement.rel = 'stylesheet';
    if (mode == true)
        newElement.href = './style.css';
    else
        newElement.href = './style-dm.css';
    document.head.appendChild(newElement);
    mode = !mode;
}

//Code for hamburger menu
var hbtn = document.getElementById("hbgr-btn");

hbtn.addEventListener('click', function () {
    togglemenuview();
})

var vflag = false;

function togglemenuview() {
    var menu = document.getElementById("nav");
    var htxt = document.getElementById("main-text");
    if (vflag == false) {
        menu.style.display = 'flex';
        menu.style.right = '0px';
        htxt.style.marginTop = '130px';
    }
    else {
        menu.style.display = 'none';
        menu.style.right = '-100%';
        htxt.style.marginTop = '10px';
    }
    vflag = !vflag;
}

