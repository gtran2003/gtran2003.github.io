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

                if(p1!=p2)
                {
                alert("Passwords do not match.");
                }

}
                <input
                type="password"
                id="password2"
                onchange="comparePasswords()">
