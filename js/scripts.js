function Order () {
  this.pizzas = [];
};

Order.prototype.addNewPizza = function (newPizza) {
  this.pizza.push(newPizza);
};

function Pizza() {
  this.size = [];
  this.sauce = [];
  this.cheese = [];
  this.meats = [];
  this.veggies = [];
  this.price = [];
};

// function getcheckboxVal(form, name) {
//   var val
//   var checkboxs = form.elements[name]
//
//   for (var i=0, len=checkboxs.length; i<len; i++) {
//         if ( checkboxs[i].checked ) {
//             val = checkboxs[i].value;
//             break;
//         }
//     }
//     console.log(val);
// };


$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var size = $('input.size:checked').val()
    //  $('input.size:checked').each(function () {
    //   return ($(this).val());
    // });

    console.log(size);
    // var val = getcheckboxVal( document.getElementById('demoForm'), 'check' );
    // console.log(val);
  });
});
