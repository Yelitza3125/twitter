window.addEventListener('load', function(event){
var textArea = document.getElementById('input');
var textContainer = document.getElementById('container');
var button = document.getElementById('tweet');
var section = document.getElementsByTagName('section');
var formulario = document.getElementsByTagName('form');
var length = textArea.getAttribute('maxlength');
var contador = document.getElementById('count');

//var parrafo = document.getElementById('content');

button.addEventListener('click', function saveText(event){  
  if(textArea.value) {
    var parrafo = document.createElement('p');
    parrafo.textContent = textArea.value;
    textContainer.appendChild(parrafo);
    textContainer.classList.add('container-text');
    parrafo.classList.add('text');

    textArea.value = '';
  }
  });

  textArea.addEventListener('keypress', function enabled(event) {
    if(textArea.value) {
      button.disabled = false;
      button.classList.add('button-enabled');
    } else if(textArea.value.length > 140) {
      button.disabled = true;
    };
  });

  textArea.addEventListener('keyup', function contadorText(event) {
    contador.innerHTML = length;
    contador.innerHTML = (length - textArea.value.length);
  });
});


/*var el_t = document.getElementById('textarea');
var length = el_t.getAttribute("maxlength");
var el_c = document.getElementById('count');
el_c.innerHTML = length;
el_t.onkeyup = function () {
  document.getElementById('count').innerHTML = (length - this.value.length);
};
<textarea id="textarea" name="text"
 maxlength="500"></textarea>
<span id="count"></span> */
  
