$("#validationForm").submit(function (event) {
  event.preventDefault();

  var errorMassage = "";

  var fName = $("#FirstName").val();
  var lName = $("#LastName").val();
  var email = $("#email").val();
  var pass1 = $("#password1").val();
  var pass2 = $("#password2").val();

  function isValidEmailAddress(emailAddress) {
    var pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;
    return pattern.test(emailAddress);
  }

  if (fName == "" || lName == "" || email == "" || pass1 == "" || pass2 == "") {
    errorMassage = "*標註為必要填寫項目";
  } else if (!isValidEmailAddress(email)) {
    errorMassage = "Mail type error";
  } else if (pass1 != pass2) {
    errorMassage = "Password error";
  }

  if (errorMassage == "") {
    $("#error").html("已註冊!!");
    $("#error").css("color", "blue");
  } else {
    $("#error").html(errorMassage);
    $("#error").css("color", "red");
  }
});
