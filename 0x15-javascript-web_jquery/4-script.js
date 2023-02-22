$(document).ready(function () {
  $('DIV#toggle_header').click(function () {
    $('header').toggleClass('red green');
  });
});
/* Inside the $(document).ready() function, we use the $() function to select the DIV element with the ID toggle_header. We attach a click event listener to this element using the click() function.
* Inside the click() function, we use the $() function again to select the header element, and then use the toggleClass() method to toggle between the red and green classes on it.
* The red and green classes are defined in a CSS stylesheet and set the text color of the header element to red (#FF0000) and green (#00FF00), respectively.
*/
