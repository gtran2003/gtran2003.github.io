function displayDate() {
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

function validatePassword(){
    let pass = document.getElementById("password").value;
    let error = document.getElementById("passwordError");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=<>.?/-]).{8,30}$/;
    if(regex.test(pass)){
        error.innerHTML = "";
        return true;
    }
    else{
        error.innerHTML =
        "Password must contain uppercase, lowercase, number and symbol.";
        return false;
    }
}

function comparePasswords(){

    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("password2").value;
    let error = document.getElementById("password2Error");

    if(p1 !== p2){

        error.innerHTML = "Passwords don't match.";
        return false;

    }

    error.innerHTML = "";
    return true;
}

function showHealth(){
    document.getElementById("healthValue").innerHTML =
    document.getElementById("health").value;
}

function reviewForm(){
    let review="";
    review += "<p><b>Name:</b> "
    + document.getElementById("fname").value + " "
    + document.getElementById("mi").value + " "
    + document.getElementById("lname").value +
    "</p>";
     review += "<p><b>Email:</b> "
    + document.getElementById("email").value +
    "</p>";
     review += "<p><b>Phone:</b> "
    + document.getElementById("phone").value +
    "</p>";
      review += "<p><b>User ID:</b> "
    + document.getElementById("userid").value +
    "</p>";

    document.getElementById("reviewContent").innerHTML = review;
}

function lowerUser(){

    let id = document.getElementById("userid");

    id.value = id.value.toLowerCase();

}

displayDate();
function validateFirstName(){
    let name = document.getElementById("fname").value;
    let error = document.getElementById("fnameError");
    let regex = /^[A-Za-z'-]{1,30}$/;
    if(regex.test(name)){
        error.innerHTML = "";
        return true;
    }

    else {
        error.innerHTML = "Letters only.";
        return false;
    }

}

function validateLastName(){
    let name = document.getElementById("lname").value;
    let error = document.getElementById("lnameError");
    let regex = /^[A-Za-z'-]{1,30}$/;
    if(regex.test(name)){
        error.innerHTML = "";
        return true;
    }
    else{
       error.innerHTML = "Letters only.";
        return false;
    }
}

function validateEmail(){
    let email = document.getElementById("email");
    email.value = email.value.toLowerCase();
    let error = document.getElementById("emailError");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email.value)){
        error.innerHTML = "";
        return true;
    }
    else{
        error.innerHTML = "Invalid email.";
        return false;
    }
}

function validateUser(){
    let user = document.getElementById("userid").value;
    let error = document.getElementById("useridError");
    let regex = /^[A-Za-z][A-Za-z0-9_-]{4,19}$/;
    if(regex.test(user)){
        error.innerHTML = "";
        return true;
    }

    else{
        error.innerHTML =
        "User ID must start with a letter and be 5-20 characters.";
        return false;

    }

}

function validateForm(){
    let ok = true;
    if(!validateFirstName()) ok = false;
    if(!validateLastName()) ok = false;
    if(!validateEmail()) ok = false;
    if(!validateUser()) ok = false;
    if(!validatePassword()) ok = false;
    if(!comparePasswords()) ok = false;
    if(ok){
        alert("Validation successful.");
        document.getElementById("submitButton").style.display = "inline";
    }
        
    else{
        alert("Please fix the errors.");
    }
    
        if(document.getElementById("rememberMe").checked){
setCookie(
"firstname",
document.getElementById("fname").value
);
}
else{
eraseCookie();
localStorage.clear();
    }
}
document.getElementById("fname").addEventListener("input", validateFirstName);
document.getElementById("lname").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("userid").addEventListener("input", validateUser);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("password2").addEventListener("input", comparePasswords);
document.getElementById("health").addEventListener("input", showHealth);
async function loadStates(){
    try{
        const response = await fetch("states.json");
        const states = await response.json();
        const dropdown = document.getElementById("state");
        states.forEach(function(state){
            let option = document.createElement("option");
            option.value = state.abbr;
            option.textContent = state.name;
            dropdown.appendChild(option);
        });
    }
    catch(error){
        console.log(error);
    }
}

loadStates();
function setCookie(name,value){
let expire = new Date();
expire.setHours(expire.getHours()+48);
document.cookie =
name+"="+value+
";expires="+expire.toUTCString()+
";path=/";

}
    function getCookie(name){
let cookieName = name+"=";
let decoded = decodeURIComponent(document.cookie);
let cookies = decoded.split(";");
for(let i=0;i<cookies.length;i++){
let c = cookies[i];
while(c.charAt(0)==" ")
c = c.substring(1);
if(c.indexOf(cookieName)==0)
return c.substring(cookieName.length,c.length);
}

return "";
}
function eraseCooke(){
    document.cookie=
        "firstname=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

    let first = getCookie("firstname");
if(first!=""){
document.getElementById("welcomeMessage").innerHTML =
"Welcome back, "+first;
document.getElementById("fname").value=first;
}
    
else{
document.getElementById("welcomeMessage").innerHTML=
"Welcome New User";
}
eraseCookie();
localStorage.clear();
document.getElementById("patientForm").reset();
function saveData(){
    localStorage.setItem("fname", document.getElementById("fname").value);
    localStorage.setItem("lname", document.getElementById("lname").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("city", document.getElementById("city").value);
    localStorage.setItem("zip", document.getElementById("zip").value);
    localStorage.setItem("userid", document.getElementById("userid").value);
    localStorage.setItem("health", document.getElementById("health").value);
}
