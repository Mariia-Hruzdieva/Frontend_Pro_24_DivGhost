let text = document.getElementById('text');
let square = document.getElementById('square');

text.onmouseover = function () {
    square.classList.add('visible')
}

text.onmouseout = function () {
    square.classList.remove('visible')
}