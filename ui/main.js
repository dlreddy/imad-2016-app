console.log('Loaded!');

//change the text of the main-text 
var element = document.getElementById('main-text');

element.innerHTML= 'new text display';

//move image
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marinLeft + 'px';
}
 img.onclick = function () { 
  var interval = setInterval(moveRight, 100);
  
 };