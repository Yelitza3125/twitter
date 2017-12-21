/*window.addEventListener('load', function(event) {
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

  textArea.addEventListener('keyup', function accountant(event) {
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
    // console.log(date);
    // console.log(strDate);
    var timeContainer = document.createElement('div');
    var timeContent = document.createElement('p');
    timeContent.textContent = strDate;
    timeContainer.appendChild(timeContent);
    container.appendChild(timeContainer);
    timeContent.classList.add('time-text');
    timeContainer.classList.add('time'); 
  });
}); */

jQuery(document).ready(function() { 
  var btn = $('button');
  var textArea = $('textarea');
  var container = $('#container');
  var maxLength = textArea.attr('maxlength');
  var MAXCHARACTERS = 140;
  
 
  $(textArea).keypress(function(event) {
    btn.attr('disabled', false);
    btn.addClass('button-enabled');   
    console.log(textArea.val());
    $('#count').html(maxLength - textArea.val().length);

    var number = maxLength - textArea.val().length;
    console.log(number);
    
 
    $('#count').toggleClass('blue', number <= 20);
    $('#count').toggleClass('red', number <= 10);    
  });

  $('button').click(function texto(event) {
    var parrafo = $('<p/>', {
      text: textArea.val(),
      'class': 'text'
    });

    $('#container').prepend(parrafo);
    $('#container').addClass('container-text');
    event.preventDefault();

    $('textarea').val('');
    $('#count').html('');

    $('button').attr('disabled', true);
    $('button').removeClass('button-enabled');
    $('button').addClass('disabled');
 
  }); 
    







  /*   textArea.addEventListener('keyup', function accountant(event) {
    count.innerHTML = maxLength;
    count.innerHTML = (maxLength - textArea.value.length);
    // console.log(length);
  });


  /*var capaDiasSemana = $('<div/>', { 'class': 'diassemana' });
Cuando tienes muchos atributos, o cuando sus valores son dinámicos, el código resulta muy claro:

var capaDiasSemana = $('<div/>', {
    'class' : 'diassemana',
    'id'    : 'id_' + user.id
});
  

/*
  $("<div>", {
    'class': 'dropdown'
}).append(
    $('<ul>', {
        'class': 'dropdown-menu',
        'aria-labelledby': 'dropdownMenu1'
    }).append(
      $('<li>')
        .append(
          $('<a>',{
            'href':'#',
            'text':'Hola Mundo'
          })
        )
    )
).hide().appendTo('#otraDiv').fadeIn('slow'); */


  /*
  if (textArea.val().length === 0) {
    btn.attr('disabled', false);
  } */

});