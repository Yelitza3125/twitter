window.addEventListener('load', function(event){
var textArea = document.getElementById('input');
var textContainer = document.getElementById('container');
var button = document.getElementById('tweet');
var section = document.getElementsByTagName('section');
var formulario = document.getElementsByTagName('form');
var length = textArea.getAttribute('maxlength');
var contador = document.getElementById('count');
var number = length - textArea.value.length;

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
    }; 
  });

  textArea.addEventListener('keyup', function contadorText(event) {
    contador.innerHTML = length;
    contador.innerHTML = (length - textArea.value.length);
    //console.log(length);
  });

  textArea.addEventListener('keyup', function changeColor(event) {
    var number = length - textArea.value.length;
    console.log(number);
    console.log(typeof(number));
   if( number > parseInt(130) && number < parseInt(141)) {
      count.classList.add('blue');
    } else if(number > parseInt(120) && number < parseInt(130)) {
     count.classList.remove('orange');
      count.classList.add('red');
   } else if(number <= parseInt(120) && number > parseInt(0)) {
      count.classList.add('black');
   };

  /*
   textArea.addEventListener('keyup', function negative(event) {
    if(Math.sign(number) === '-1') {
      '-' + number;
    }
   }); */


  });
   

  button.addEventListener('click', function time(event) {
      var f=new Date();
      cad=f.getHours()+":"+f.getMinutes(); 
      console.log(f);
      var horaContainer = document.createElement('div');
      var horaContent = document.createElement('p');
      horaContent.textContent = cad;
      horaContainer.appendChild(horaContent);
      //console.log(horaContent);
      container.appendChild(horaContainer);
      horaContent.classList.add('time-text');
      horaContainer.classList.add('time');
  })

  button.addEventListener('click', function separator(event) {
    var line = document.createElement('hr');
    //horaContainer.insertAfter(line);


  })

});



