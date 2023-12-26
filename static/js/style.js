var diya_btn = document.getElementById('diya_btn');
var doris_btn = document.getElementById('doris_btn');
var mason_btn = document.getElementById('mason_btn');
var ray_btn = document.getElementById('ray_btn');
var add_btn = document.getElementById('add_btn');

var diya_exp = document.getElementById('diya_exp');
var doris_exp = document.getElementById('doris_exp');
var mason_exp = document.getElementById('mason_exp');
var ray_exp = document.getElementById('ray_exp');
var group = document.getElementById('group');

var closeBtn1 = document.getElementsByClassName('close1')[0];
var closeBtn2 = document.getElementsByClassName('close2')[0];
var closeBtn3 = document.getElementsByClassName('close3')[0];
var closeBtn4 = document.getElementsByClassName('close4')[0];
var closeBtn5 = document.getElementsByClassName('close5')[0];


// 當按鈕被點擊時顯示燈箱
diya_btn.onclick = function() {
    diya_exp.style.display = 'block';
}
doris_btn.onclick = function() {
    doris_exp.style.display = 'block';
}
mason_btn.onclick = function() {
    mason_exp.style.display = 'block';
}
ray_btn.onclick = function() {
    ray_exp.style.display = 'block';
}
add_btn.onclick = function() {
    group.style.display = 'block';
}


// 當關閉按鈕被點擊時隱藏燈箱
closeBtn1.onclick = function() {
    diya_exp.style.display = 'none';
}
closeBtn2.onclick = function() {
    doris_exp.style.display = 'none';
}
closeBtn3.onclick = function() {
    mason_exp.style.display = 'none';
}
closeBtn4.onclick = function() {
    ray_exp.style.display = 'none';
}
closeBtn5.onclick = function() {
    group.style.display = 'none';
}
