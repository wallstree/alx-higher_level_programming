function translateHello () {
  const service = 'https://fourtonfish.com/hellosalut/?lang=';
  const lang = $('INPUT#language_code').val();
  const url = service + lang;
  $.getJSON(url, function (data) {
    $('DIV#hello').text(data.hello);
  });
}

$(document).ready(function () {
  $('INPUT#btn_translate').click(translateHello);
  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        translateHello();
      }
    });
  });
});
/*
 * The translateHello() function is defined. This function is called whenever the user clicks on a button with the ID btn_translate or presses the "Enter" key while focusing on an input field with the ID language_code. This function first builds a URL by concatenating a base service URL (https://fourtonfish.com/hellosalut/?lang=) with the language code entered by the user. It then sends an AJAX request to the built URL to retrieve a JSON object that contains the translated word "hello" for the specified language. Finally, it updates the text content of a DIV element with the ID hello to display the translated word.
* The $(document).ready() function is called. This function ensures that the code inside it is executed only after the HTML document has been fully loaded and is ready to be manipulated.
* Inside the $(document).ready() function, we use the $() function to select two input elements with the IDs btn_translate and language_code, and add event listeners to them.
* When the user clicks on the button with the ID btn_translate, the translateHello() function is called.
* When the user focuses on the input field with the ID language_code, a keydown event listener is attached to it. This listener listens for the "Enter" key (keyCode 13) to be pressed, and if it is, it calls the translateHello() function.
*/
