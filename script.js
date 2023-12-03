
var tbtn = document.getElementById("toggle-btn");
window.console.log(tbtn);

var mode = true;
render();

tbtn.addEventListener('click', function () {
    mode = !mode;
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
}

var hbtn = document.getElementById("hbgr-btn");

window.console.log(hbtn); 

hbtn.addEventListener('click', function () {
    togglemenuview();
    
})

var vflag = false;

function togglemenuview(){
    var menu = document.getElementById("nav");
    var htxt = document.getElementById("main-text");
    if (vflag==false){
        menu.style.right = '0px';
        htxt.style.marginTop = '130px';
    }
    else{
        menu.style.right = '-100%';
        htxt.style.marginTop = '20px';
    }
    vflag = !vflag;
}

