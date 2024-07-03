document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");

    if (form) {
        if (document.getElementById("username") && document.getElementById("email")) {
            initializeSignUp();
        } else {
            initializeLogin();
        }
    }

    function initializeSignUp() {
        let username = document.getElementById("username");
        let m1 = document.getElementById("s-nvald");

        let email = document.getElementById("email");
        let m2 = document.getElementById("s-evald");

        let password = document.getElementById("password");
        let m3 = document.getElementById("s-pvald1");

        let coPassword = document.getElementById("co-password");
        let m4 = document.getElementById("s-pvald2");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let namevalidation = /^[a-zA-Z]+ [a-zA-Z]+$/;
            let result1 = namevalidation.test(username.value);
            if (result1) {
                m1.style.display = "block";
                m1.innerHTML = "Valid name";
                m1.style.color = "white";
            } else {
                m1.style.display = "block";
                m1.innerHTML = "Not valid name";
                m1.style.color = "red";
            }

            let emailvalidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            let result2 = emailvalidation.test(email.value);
            if (result2) {
                m2.style.display = "block";
                m2.innerHTML = "Valid email";
                m2.style.color = "white";
            } else {
                m2.style.display = "block";
                m2.innerHTML = "Not valid email";
                m2.style.color = "red";
            }

            let Passwordvalidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
            let result3 = Passwordvalidation.test(password.value);
            if (result3) {
                m3.style.display = "block";
                m3.innerHTML = "Valid password";
                m3.style.color = "white";
            } else {
                m3.style.display = "block";
                m3.innerHTML = "Not valid password";
                m3.style.color = "red";
            }

            if (coPassword.value != password.value) {
                m4.style.display = "block";
                m4.innerHTML = "Passwords do not match";
                m4.style.color = "red";
            } else {
                m4.style.display = "block";
                m4.innerHTML = "Passwords match";
                m4.style.color = "white";
            }

            if (result1 && result2 && result3 && coPassword.value === password.value) {
                let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
                let id = arrayOfUsers.length + 1;
                let userObj = {
                    id: id,
                    Name: username.value,
                    email: email.value,
                    password: password.value,
                };
                arrayOfUsers.push(userObj);
                window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
                alert("Account created");
                window.location = "login new.html";
            } else {
                alert("Please fill out all fields correctly.");
            }
        });
    }

    function initializeLogin() {
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];

            let foundUser = arrayOfUsers.find(user => user.email === emailInput.value && user.password === passwordInput.value);

            if (foundUser) {
                sessionStorage.setItem("currentUser", JSON.stringify(foundUser)); // تغيير إلى sessionStorage
                alert("Login successful!");
                window.location.href = "home-after.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});
