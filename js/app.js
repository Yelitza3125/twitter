window.addEventListener('load', function(event) {
  var textArea = document.getElementById('input');
  var textContainer = document.getElementById('container');
  var button = document.getElementById('tweet');
  var section = document.getElementsByTagName('section');
  var form = document.getElementsByTagName('form');
  var maxLength = textArea.getAttribute('maxlength');
  var count = document.getElementById('count');
  var number = maxLength - textArea.value.length;


  button.addEventListener('click', function saveText(event) {  
    if (textArea.value) {
      var paragraph = document.createElement('p');
      paragraph.textContent = textArea.value;
      textContainer.appendChild(paragraph);
      textContainer.classList.add('container-text');
      paragraph.classList.add('text');
    
      textArea.value = '';
    }
  });

  textArea.addEventListener('keypress', function enabled(event) {
    if (textArea.value) {
      button.disabled = false;
      button.classList.add('button-enabled');
    }; 
  });

  textArea.addEventListener('keyup', function contadorText(event) {
    count.innerHTML = maxLength;
    count.innerHTML = (maxLength - textArea.value.length);
    // console.log(length);
  });

  textArea.addEventListener('keyup', function changeColor(event) {
    var number = maxLength - textArea.value.length;
    // console.log(number);
    // console.log(typeof(number));
    if (number > parseInt(130) && number < parseInt(141)) {
      count.classList.add('blue');
    } else if (number > parseInt(120) && number < parseInt(130)) {
      count.classList.remove('orange');
      count.classList.add('red');
    } else if (number <= parseInt(120) && number > parseInt(0)) {
      count.classList.add('black');
    };
  });
   

  button.addEventListener('click', function time(event) {
    var date = new Date();
    var strDate = date.getHours() + ':' + date.getMinutes(); 
    // console.log(f);
    var horaContainer = document.createElement('div');
    var horaContent = document.createElement('p');
    horaContent.textContent = strDate;
    horaContainer.appendChild(horaContent);
    // console.log(horaContent);
    container.appendChild(horaContainer);
    horaContent.classList.add('time-text');
    horaContainer.classList.add('time');
  });
});
