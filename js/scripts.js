var Pizza = {
  size: [],
  sauce: [],
  cheese: [],
  meat: [],
  veggies: []
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
    var input = [];
    $("input:checked").each(function () {
      input.push($(this).val())
    });
    console.log(input);
    // var val = getcheckboxVal( document.getElementById('demoForm'), 'check' );
    // console.log(val);
  });
});
