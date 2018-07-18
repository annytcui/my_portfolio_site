$(document).ready(function() {

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();

    // get the name field value
    var firstname = $('#firstname').val();
    // get the name field value
    var lastname = $('#lastname').val();
    // get the email field value
    var email = $('#email').val();
    // get the messages
    var message = $('#message').val();

    // send to formspree
    $.ajax({
      url:'https://formspree.io/tianyuancuipan@gmail.com',
      method: 'POST',
      data: {
        firstname: firstname,
        lastname: lastname,
        _replyto: email,
        email: email,
        message: message,
        _subject: 'My Form Submission',
      },
      dataType: "json",
      success: function() {
        console.log('success');
        $('#contact-form').hide();
        $('#thankyou-message').show();
      }
    });
  });
});
