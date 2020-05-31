$(function() {
  
  // toastr.info('Are you the 6 fingered man?')
  $("#signup-form #email-id").on("blur", function() {

    var inpt = $(this);
    var val = $(this)
      .val()
      .trim();
    if (val !== "") {
      $.ajax({
        url: "/verifyemail",
        type: "POST",
        data: { email: val },
        success: function(data) {
          if (data.status) {
            var msgElem = $("<p></p>").addClass("c-text-primary email-err");
            $(msgElem).text(data.err);
            if ($(".email-err").length === 0) {
              $(inpt).after(msgElem);
            }
            $(inpt).focus();
          } else if ($(".email-err").length > 0) {
            $(".email-err").remove();
          }
        }
      });
    } else if ($(".email-err").length > 0) {
      $(".email-err").remove();
    }
  });
});
