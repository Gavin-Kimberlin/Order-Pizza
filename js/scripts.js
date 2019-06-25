var Pizza = {
  size: [],
  sauce: [],
  cheese: [],
  meat: [],
  veggies: []
};


function getRadioVal(form, name) {
  var val
  var radios = form.elements[name]

  for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    console.log(val);
};


$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var input = $('.check').value;
    console.log(input);
    var val = getRadioVal( document.getElementById('demoForm'), 'check' );
    console.log(val);
  });
});
