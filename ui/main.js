console.log('Loaded!');

//change the text of the main-text 
var element = document.getElementById('main-text');

element.innerHTML= 'new text display';

//move image
var img = document.getElementById('madi');
img.onclick = function (){

 img.style.marginRight = 50;
};