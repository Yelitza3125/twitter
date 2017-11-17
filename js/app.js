window.addEventListener('load', function(event){
var textArea = document.getElementById('input');
var textContainer = document.getElementById('container');
var button = document.getElementById('tweet');
var section = document.getElementsByTagName('section');

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

  textArea.addEventListener('keypress', function actived(event) {
    if(textArea.value) {
      button.disabled = false;
      button.classList.add('button-enabled');
    };

  });

});



  
