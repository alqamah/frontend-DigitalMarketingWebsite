
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