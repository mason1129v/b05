var good = document.getElementById('good');
var lkc = document.getElementById('lkc');
var closeBtn6 = document.getElementsByClassName('close6')[0];

good.onclick = function() {
    lkc.style.display = 'block';
}

closeBtn6.onclick = function() {
    lkc.style.display = 'none';
}