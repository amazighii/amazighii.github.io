// function login() {
//     console.log("im here bitch")
//     let container = document.querySelector(".container");
//     const inputEmail = document.createElement("input");
//     inputEmail.type = "email";
//     inputEmail.placeholder = "username or email";

//     const inputPassword = document.createElement("input");
//     inputPassword.type = "password";
//     inputPassword.placeholder = "password";

//     const loginbtn = document.createElement("button");
//     loginbtn.textContent = "Login";
//     container.append(inputEmail, inputPassword, loginbtn)
// }

function login() {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    let loginWrapper = document.createElement("div");
    loginWrapper.className = "loginWrapper";
    let welcomeholder = document.createElement('div');
    welcomeholder.className = "welcomeholder";
    let welcomer = document.createElement('p');
    welcomer.className = "welcome"
    welcomer.innerText = "Welcome back!";

    let instructions = document.createElement('p');
    instructions.className = "instructions";
    instructions.innerText = "Enter your Credentials to access your account";
    welcomeholder.append(welcomer, instructions);


    let form = document.createElement('form');
    form.className = "form";

   let username = document.createElement('input');
    username.setAttribute("type", "email");
    username.id = "username";
    username.setAttribute("placeholder", "username or email");

    let password = document.createElement('input');
    password.setAttribute("type", "password");
    password.id = "password"
    password.setAttribute("placeholder", "password");

    let button = document.createElement('button');
    button.id = "loginbuttn"
    button.innerText = 'Login';
    button.setAttribute("onclick", "fetchLogin(event)");

    let signinHolder = document.createElement('div');
    signinHolder.className = 'signInHolder';
    let signIntext = document.createElement('p');
    signIntext.className = "signInText";

    signIntext.innerText = "New to our Forum?";
    signinHolder.append(signIntext);

    let registerButton = document.createElement('button');
    registerButton.id = "registerbuttn"
    registerButton.setAttribute("onclick", "register(event)");
    registerButton.innerText = "Sign Up";
    signinHolder.append(registerButton);

    let picture = document.createElement('img');
    picture.id = "pic";
    picture.src = "../assets/img/net.jpg";

    let emailText = document.createElement('p');
    emailText.className = "emailText";
    emailText.innerText = "Email or username";


    let passwordText = document.createElement('p');
    passwordText.className = "passwordText";
    passwordText.innerText = "Password";

    form.append(welcomeholder, emailText, username, passwordText, password, button, signinHolder);
    loginWrapper.append(form, picture);

    container.append(loginWrapper);
}









login();