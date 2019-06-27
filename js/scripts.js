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

Pizza.prototype.pizzaPrice = function () {
  this.price += this.cheese.length + this.meats.length + this.veggies.length;
  return(this.price);
};

function displayOrder (display) {
  var pizzaList = $('#order');
  htmlForPizza = '';
  display.pizzas.forEach(function (pizza) {
    htmlForPizza += "<li" + pizza.size + ">" + pizza.sauce + " " + pizza.cheese + " " + pizza.meats + " " + pizza.veggies + " " + pizza.price + "</li>";
  });
  pizzaList.html(htmlForPizza);
};

var newOrder = new Order()
$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var size = $('input.size:checked').val();
    var sauce = $('input.sauce:checked').val();
    var cheese = []; $('input.cheese:checked').each(function (i) {
      cheese[i] = $(this).val();
    });
    var meats = [];
    $('input.meats:checked').each(function (i) {
      meats[i] = $(this).val();
    });
    var veggies = [];
    $('input.veggies:checked').each(function (i) {
      veggies[i] = $(this).val();
    });
    var newPizza = new Pizza(size, sauce, cheese, meats, veggies);
    newPizza.pizzaPrice();
    newOrder.addNewPizza(newPizza)
    console.log(newOrder);
    displayOrder(newOrder);
  });
});
