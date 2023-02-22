$(document).ready(function () {
  $('DIV#red_header').click(function () {
    $('header').css('color', '#FF0000');
  });
});
/*
 * This code uses the jQuery function $() to select the DIV#red_header element, and then uses the click() method to attach a click event listener to the element. When the element is clicked, the code inside the callback function is executed.
In the callback function, we again use the $() function to select the <header> element, and then use the css() method to update its text color to red (#FF0000).
*/
