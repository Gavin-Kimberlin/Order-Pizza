function Order () {
  this.pizzas = [];
  this.total;
};

function Pizza(a, b, c, d, e, f) {
  this.size = a;
  this.sauce = b;
  this.cheese = c;
  this.meats = d;
  this.veggies = e;
  this.price = f;
};

Order.prototype.addNewPizza = function (i) {
  this.pizzas.push(i);
};

var newOrder = new Order()
$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var size = $('input.size:checked').val();
    var sauce = $('input.sauce:checked').val();
    var cheese = []; $.each($('input.cheese:checked')), function () {
      cheese.push($(this).val());
    };
    var meats = [$('input.meats:checked').val()];
    var veggies = [$('input.veggies:checked').val()];
    var newPizza = new Pizza(size, sauce, cheese, meats, veggies);
    newOrder.addNewPizza(newPizza)
    console.log(newOrder);
  });
});
