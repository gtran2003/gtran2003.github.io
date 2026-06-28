   function displayDate() {
            var today = new Date();
            var options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };

            document.getElementById("todayDate").innerHTML =
                today.toLocaleDateString("en-US", options);
        }
}
   function validatePassword() {

        let pass=document.getElementById("password").value;

        let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=<>.?/-]).{8,30}$/;
        
        if(!regex.test(pass))
        {
        alert("Password requirements not met.");
        }
        <input
                type="password"
                id="password"
                onchange="validatePassword()">

                        
   function comparePasswords(){
                let p1=document.getElementById("password").value;
                let p2=document.getElementById("password2").value;

                if(p1!==p2)   {
                alert("Passwords do not match.");
                }
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
