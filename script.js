F   function displayDate() {
            var today = new Date();
            var options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };

        const el = document.getElementById("todayDate");
    if (el) {
        el.innerHTML = today.toLocaleDateString("en-US", options);
    }
}
   function validatePassword() {
        let pass=document.getElementById("password").value;
        let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=<>.?/-]).{8,30}$/;  

        if (!regex.test(pass)) {
            document.getElementById("passwordError").innerHTML=
            "Password must have uppercase, lowercase, number and symbol.";
        return false;
    }
    return true;
   }
   function comparePasswords(){
                let p1=document.getElementById("password").value;
                let p2=document.getElementById("password2").value;

                if(p1!==p2)   {
                passwordError2.innerHTML=
                        "Passwords don't match.
            return false;
                }
             return true;
}

 function showHealth(){
        document.getElementById("healthValue").innerHTML =
        document.getElementById("health").value;

}        
 function reviewForm(){
let review="";

            review+="<p><b>Name:</b> "
+document.getElementById("fname").value+" "
+document.getElementById("mi").value+" "
+document.getElementById("lname").value+
"</p>";

            review+="<p><b>Email:</b> "
                        
+document.getElementById("email").value+
"</p>";

            review+="<p><b>Phone:</b> "
+document.getElementById("phone").value+
"</p>";

document.getElementById("reviewContent").innerHTML=review;

}
               
function lowerUser(){
let id=document.getElementById("userid");
id.value=id.value.toLowerCase();

}

displayDate();
}

function validateFirstName(){
            let name= document.getElementById("fname").value;
            let error=document.getElementById("fnameError");
            let regex=/^[A-Za-z'-]{1,30}$/;
            if(regex.test(name)){
                        error.innerHTML="":
                        return true;
            }
            else{
            error.innerHTML="Letters only.";
            return false;

            }
function validateEmail(){
            let email=document.getElementById("email");
            email.value=email.value.toLowerCase();
            let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let error=document.getElementByID("emailError");
                                              if(regex.test(email.value)){
                        error.innerHTML="";
            }

            else{
                        error.innerHTML="invalid email.")
            }
function validateUser(){
            
}
function validateForm(){

let ok=true;

if(!validateFirstName()) ok=false;

if(!validateLastName()) ok=false;

if(!validatePassword()) ok=false;

if(!comparePasswords()) ok=false;

if(ok){

document.getElementById("submitButton").style.display="inline";

}

else{

alert("Please fix the errors.");

}

}
            

