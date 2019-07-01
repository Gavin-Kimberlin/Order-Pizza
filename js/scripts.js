function Order () {
  this.pizzas = [];
  this.total;
};

function Pizza(size, sauce, cheese, meats, veggies) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
  this.price = 0;
};

Order.prototype.addNewPizza = function (i) {
  this.pizzas.push(i);
};

Pizza.prototype.pizzaPrice = function () {
  this.price = this.cheese.length + this.meats.length + this.veggies.length;
  if (this.size === 'small') {
    this.price += 10;
  } else if (this.size === 'medium') {
    this.price += 11;
  } else if (this.size === 'large') {
    this.price += 14;
  }
};

function displayOrder (display) {
  var pizzaList = $('#order');
  htmlForPizza = '';
  display.pizzas.forEach(function (pizza) {
    htmlForPizza += '<li> Size: ' + pizza.size + '<br>Sauce: ' + pizza.sauce + '<br>Cheese: ' + pizza.cheese + '<br>Meats: ' + pizza.meats + '<br>Veggies: ' + pizza.veggies + '<br>Price: $' + pizza.price + '</li>';
  });
  pizzaList.append(htmlForPizza);
};

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var newOrder = new Order()
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
