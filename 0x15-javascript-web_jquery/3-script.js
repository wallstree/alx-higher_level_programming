$(document).ready(function () {
  $('DIV#red_header').click(function () {
    $('header').addClass('red');
  });
});
/*
 * The $(document).ready() function is called. This function ensures that the code inside it is executed only after the HTML document has been fully loaded and is ready to be manipulated.
* Inside the $(document).ready() function, we use the $() function to select the DIV element with the ID red_header. We attach a click event listener to this element using the click() function.
* Inside the click() function, we use the $() function again to select the header element, and then use the addClass() method to add the red class to it.
* The red class is defined in a CSS stylesheet and sets the text color of the header element to red (#FF0000).
*/
