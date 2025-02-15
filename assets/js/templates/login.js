import { fetchLogin } from "../services/services.js";

export function login() {
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

    let loginbtn = document.createElement('button');
    loginbtn.id = "loginbuttn"
    loginbtn.innerText = 'Login';

    loginbtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetchLogin(btoa(username.value + ':' + password.value));
    })

    let picture = document.createElement('img');
    picture.id = "pic";
    picture.src = "../assets/img/net.jpg";

    let emailText = document.createElement('p');
    emailText.className = "emailText";
    emailText.innerText = "Email or username";


    let passwordText = document.createElement('p');
    passwordText.className = "passwordText";
    passwordText.innerText = "Password";

    let showerror = document.createElement('div');
    showerror.className = 'showerror';

    form.append(welcomeholder, emailText, username, passwordText, password, showerror, loginbtn);
    loginWrapper.append(form, picture);

    container.append(loginWrapper);
}

