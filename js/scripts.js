var pizza = {
  size: ['Small', 'Medium', 'Large'],
  sauce: ['Marinara', 'Olive Oil & Garlic', 'Creamy Garlic' ],
  cheese: ['mozarella', 'Parmesan', 'Feta'],
  meat: ['Bacon', 'Canadian Bacon', 'Chicken'].
  veggies: []
};


function toppings(pizza) {

};

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var input = $('.1').checked;
    console.log(input);
  });
});
