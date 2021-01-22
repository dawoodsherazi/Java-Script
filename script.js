function checkValidity() {
    var ValidateEmail = document.getElementById("email").value;
    var ValidatePassword = document.getElementById("password").value;
    debugger;

    if (ValidateEmail == "dawood@gmail.com" && ValidatePassword == "12345") {

        var mgs= "valid"
        window.alert(mgs);
        
        return true;


    } else {


     var mgs1="invalid"
        window.alert(mgs1);
        return false;
    }
}
