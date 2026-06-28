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
