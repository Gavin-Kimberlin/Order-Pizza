var pizza = {
  size: ['small', 'medium', 'large'],
  cheese: false,
  
}


function toppings(pizza) {

};

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var input = $('.1').checked;
    console.log(input);
  });
});
