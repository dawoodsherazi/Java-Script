
        function checkValidation()
        {
                var ValidateEmail=document.myForm.email.value;
                var ValidatePassword=document.myForm.password.value;
            
                if (ValidateEmail == "dawood@gmail.com") && (ValidatePassword=="12345")
                {
                    document.myForm.paragraph.innerHTML="Valid Credentials";
                    alert(valid );
//                    document.getElementById("b1").disabled = false;
                    return true;
                 
                }
            else{
                
                   document.myForm.paragraph.innerHTML=" Invalid Credentials";
//                    document.getElementById("b1").disabled = true;
                 alert(invalid );
                    return false;
            }
        }
    
